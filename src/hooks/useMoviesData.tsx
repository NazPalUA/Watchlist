import { useState, useEffect } from "react"

export default function useMoviesData(movieIds) {
    
    const [moviesData, setMoviesData] = useState([])
    const [moviesLoading, setMoviesLoading] = useState(true)
    const [moviesError, setMoviesError] = useState(null)

    useEffect(() => {
        if (movieIds !== undefined || movieIds.length !== 0) {
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

