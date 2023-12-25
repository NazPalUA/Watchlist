import { useState, useEffect, useCallback } from 'react'
import { PopularOrSearchMoviesAPIResponse, Result as Movie } from '../../../types/PopularOrSearchMoviesAPI'
import getURL from '../utils/getURL'
import getUniqueMoviesData from '../utils/getUniqueMoviesData'

// Types for different fetch variants
export type SearchTypes = {
    variant: "search"
    searchText: string | undefined
}

export type PopularTypes = {
    variant: "popular"
}

// State structure for the hook
type State = {
    loading: boolean
    error: Error | null | unknown
    hasMore: boolean
}

/**
 * Custom hook for fetching movie data from specified URLs. This hook manages
 * the state for an infinite scroll feature, handling pagination, loading status, and errors.
 * 
 * Note: This hook is specifically designed for URLs returning data in the format
 * defined by PopularOrSearchMoviesAPIResponse in src/types/PopularOrSearchMoviesAPI.ts.
 * The provided input must adhere to this expected data structure for correct operation.
 *
 * @param input An object containing the parameters for fetching movies, either by search or popular query.
 * @returns An object containing the current list of movies (`movies`), state with loading status (`loading`),
 *          error information (`error`), a boolean indicating if more movies are available to fetch (`hasMore`),
 *          and functions to fetch the next page of movies (`fetchNextPage`) and reset errors (`resetError`).
 */

export default function useInfiniteScrollMoviesList(input: SearchTypes | PopularTypes) {
    const [movies, setMovies] = useState<Movie[]>([])
    const [state, setState] = useState<State>({ loading: false, error: null, hasMore: true })
    const [page, setPage] = useState<number>(1)

    // Function to fetch data from the API
    const fetchData = useCallback(async (currentPage: number) => {
        // Construct the URL for the API request
        const newUrl = getURL({...input, page: currentPage})
        if (!newUrl) return
        
        // Set loading state before starting the fetch
        setState(prevState => ({ ...prevState, loading: true }))

        try {
            // Perform the API request
            const response = await fetch(newUrl)
            const responseData = await response.json() as PopularOrSearchMoviesAPIResponse

            // Update the movies state and check if more movies are available
            setMovies(prevData => {
                const combinedData = currentPage === 1 ? responseData.results : [...prevData, ...responseData.results]
                return getUniqueMoviesData(combinedData)
            })
            setState(prevState => ({
                ...prevState,
                hasMore: responseData.total_pages > currentPage,
                loading: false
            }))
        } catch (error: unknown) {
            // Handle errors during the fetch operation
            if (error instanceof Error) {
                setState(prevState => ({ ...prevState, error, loading: false }))
            } else {
                setState(prevState => ({ ...prevState, error: new Error("An unknown error occurred"), loading: false }))
            }
        }
    }, [input])

    // Effect for initializing and refetching data when input changes
    useEffect(() => {
        setPage(1) 
        setMovies([])
        fetchData(1)
    }, [input, fetchData])

    // Function to fetch the next page of movies
    const fetchNextPage = () => {
        if (state.hasMore && !state.loading) {
            const nextPage = page + 1
            setPage(nextPage)
            fetchData(nextPage)
        }
    }

    // Return the state and functions to be used by the component
    return { movies, ...state, fetchNextPage }
}
