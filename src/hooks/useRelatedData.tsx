import { useState, useEffect } from "react"

const BASE_URL = "https://api.themoviedb.org/3"

interface Movie {
    id: string | undefined,
    poster_path: string | undefined,
    vote_average: number,
    title: string,
    release_date: string
}

interface ApiResponse {
    results: Movie[];
}

interface UseRelatedDataReturn {
    relatedData: Movie[];
    relatedLoading: boolean;
    relatedError: Error | null;
}

function useRelatedData(movieId: string, numberOfItems = 25): UseRelatedDataReturn  {
    const [relatedData, setRelatedData] = useState<Movie[]>([])
    const [relatedLoading, setRelatedLoading] = useState(true)
    const [relatedError, setRelatedError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchRelatedData = async () => {
            try {
                const recommendedMoviesResponse = await fetch(
                    `${BASE_URL}/movie/${movieId}/recommendations?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
                )
                const popularMoviesResponse = await fetch(
                    `${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
                )

                if (!recommendedMoviesResponse.ok || !popularMoviesResponse.ok) {
                    throw new Error("Some requests failed")
                }

                const recommendedMoviesData: ApiResponse  = await recommendedMoviesResponse.json()
                const popularMoviesData: ApiResponse  = await popularMoviesResponse.json()

                let relatedMovies = recommendedMoviesData.results
                if (relatedMovies.length < numberOfItems) {
                    const popularMoviesToAdd: Movie[] = popularMoviesData.results.slice(
                        0,
                        numberOfItems - relatedMovies.length
                    )
                    relatedMovies = [...relatedMovies, ...popularMoviesToAdd]
                } else if (relatedMovies.length > numberOfItems) {
                    relatedMovies = relatedMovies.slice(0, numberOfItems)
                }

                setRelatedData(relatedMovies)
                setRelatedLoading(false)
            } catch (relatedError: unknown) {
                if (relatedError instanceof Error) {
                    setRelatedError(relatedError);
                } else {
                    setRelatedError(new Error("An unknown error occurred"));
                }
                setRelatedLoading(false);
            }
        }

        fetchRelatedData()
    }, [movieId])

    return { relatedData, relatedLoading, relatedError }
}

export default useRelatedData
