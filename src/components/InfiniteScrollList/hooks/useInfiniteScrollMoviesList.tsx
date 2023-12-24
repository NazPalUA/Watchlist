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
import { PopularOrSearchMoviesAPIResponse, Result as Movie } from '../../../types/PopularOrSearchMoviesAPI';
import getURL from '../utils/getURL';
import getUniqueMoviesData from '../utils/getUniqueMoviesData';


export type SearchTypes = {
    variant: "search";
    searchText: string | undefined;
}

export type PopularTypes =  {
    variant: "popular";
}


export default function useInfiniteScrollMoviesList(input: SearchTypes | PopularTypes) {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [url, setUrl] = useState(() => getURL(input));
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);

    // Effect for updating URL when input changes
    useEffect(() => {
        const newUrl = getURL(input);
        setUrl(newUrl);
        setPage(1); // Reset page to 1 when input changes
        setMovies([]); // Clear existing movies
    }, [input]); // Add input or input.searchText here as a dependency


    const fetchData = async () => {
        if (url === null) return
        setLoading(true)
        try {
            const response = await fetch(url)
            const responseData = await response.json() as PopularOrSearchMoviesAPIResponse

            setMovies(prevData => {
                const newData = [...prevData, ...responseData.results] 
                return getUniqueMoviesData(newData)
            })
            // setHasMore(responseData.results.length > 0)
            setHasMore(responseData.total_pages > page)
            setPage(page + 1)
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error)
            } else {
                setError(new Error("An unknown error occurred"));
            }

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!url) return;
        fetchData();
    }, [url, page]); // Add page as a dependency to fetch when page changes


    const fetchNextPage = () => setPage(prevPage => prevPage + 1);

    return { movies, loading, error, hasMore, page, setUrl, fetchNextPage }
}