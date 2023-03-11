import { useState, useEffect } from "react"

const BASE_URL = "https://api.themoviedb.org/3"

function useRelatedData(movieId, numberOfItems = 25) {
    const [relatedMoviesData, setRelatedMoviesData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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

                const recommendedMoviesData = await recommendedMoviesResponse.json()
                const popularMoviesData = await popularMoviesResponse.json()

                let relatedMovies = recommendedMoviesData.results
                if (relatedMovies.length < numberOfItems) {
                    const popularMoviesToAdd = popularMoviesData.results.slice(
                        0,
                        numberOfItems - relatedMovies.length
                    )
                    relatedMovies = [...relatedMovies, ...popularMoviesToAdd]
                } else if (relatedMovies.length > numberOfItems) {
                    relatedMovies = relatedMovies.slice(0, numberOfItems)
                }

                setRelatedMoviesData(relatedMovies)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchRelatedData()
    }, [movieId])

    return { relatedMoviesData, loading, error }
}

export default useRelatedData
