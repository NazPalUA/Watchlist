import { useState, useEffect } from "react"

interface Movie {
    movieId: string,
    poster_path: string,
    vote_average: number,
    title: string,
    release_date: string,
    id: string,
    runtime: number
}

type UseMoviesDataReturn = {
    moviesData: Movie[];
    moviesLoading: boolean;
    moviesError: Error | null;
}

export default function useMoviesData(movieIds: string[] | undefined): UseMoviesDataReturn {
    
    const [moviesData, setMoviesData] = useState<Movie[]>([])
    const [moviesLoading, setMoviesLoading] = useState(true)
    const [moviesError, setMoviesError] = useState<Error | null>(null)

    useEffect(() => {
        if (movieIds !== undefined && movieIds.length !== 0) {
            const BASE_URL = "https://api.themoviedb.org/3/movie"
            const urls = movieIds.map(movieId => `${BASE_URL}/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`)

            Promise.all(urls.map(url => fetch(url)))
                .then(responses => Promise.all(responses.map(response => response.json())))
                .then(data => {
                    setMoviesData(data)
                    setMoviesLoading(false)
                })
                .catch(moviesError => {
                    setMoviesError(moviesError)
                    setMoviesLoading(false)
                })
        }
    }, [movieIds, moviesLoading])

    return {moviesData, moviesLoading, moviesError}
}

