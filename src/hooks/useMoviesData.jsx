import { useState, useEffect } from "react";

export default function useMoviesData(movieIds, apiKey) {
    
    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (movieIds !== undefined || movieIds.length !== 0) {
            const BASE_URL = "https://api.themoviedb.org/3/movie";
            const urls = movieIds.map(movieId => `${BASE_URL}/${movieId}?api_key=${apiKey}&language=en-US`);

            Promise.all(urls.map(url => fetch(url)))
                .then(responses => Promise.all(responses.map(response => response.json())))
                .then(data => {
                    setMoviesData(data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                });
        }
    }, [movieIds, apiKey, loading]);

    return [moviesData, loading];
}

