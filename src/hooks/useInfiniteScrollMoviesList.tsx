/**
 * Custom hook for fetching movie data from specified URLs. This hook manages
 * the state for an infinite scroll feature, handling pagination and loading status.
 * 
 * Note: This hook is specifically designed for URLs returning data in the format
 * defined by PopularOrSearchMoviesAPIResponse in src/types/PopularOrSearchMoviesAPI.ts.
 * The provided URL must adhere to this expected data structure for correct operation.
 *
 * @param fullUrl The URL used for fetching movie data. This URL should include the base
 *                endpoint and any necessary query parameters, excluding pagination parameters.
 * @returns An object containing the current list of movies (`movies`), a boolean indicating
 *          if more movies are available to fetch (`hasMore`), and a function to fetch the
 *          next page of movies (`fetchNextPage`).
 */

import { useState, useEffect } from 'react';
import { PopularOrSearchMoviesAPIResponse, Result as Movie } from '../types/PopularOrSearchMoviesAPI';

function useInfiniteScrollMoviesList(fullUrl: string) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(`${fullUrl}&page=${page}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data: PopularOrSearchMoviesAPIResponse = await response.json();

                setMovies(prevMovies => [...prevMovies, ...data.results]);
                setHasMore(data.page < data.total_pages);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            }
        }

        fetchMovies();
    }, [fullUrl, page]);

    const fetchNextPage = () => setPage(prevPage => prevPage + 1);

    return { movies, hasMore, fetchNextPage };
}

export default useInfiniteScrollMoviesList;