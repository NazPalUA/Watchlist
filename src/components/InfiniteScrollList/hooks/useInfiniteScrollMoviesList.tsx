import { useCallback, useEffect, useState } from "react"
import useFetch from "../../../hooks/useFetch"
import {
  Result as Movie,
  PopularOrSearchMoviesAPIResponse,
} from "../../../types/PopularOrSearchMoviesAPI"
import getUniqueMoviesData from "../../../utils/getUniqueMoviesData"
import getURL from "../utils/getURL"

// Types for different fetch variants
export type SearchTypes = {
  variant: "search"
  searchText: string | undefined | null
}

export type PopularTypes = {
  variant: "popular"
}

export default function useInfiniteScrollMoviesList(
  input: SearchTypes | PopularTypes
) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)

  // Construct the URL for the API request
  const url = getURL({ ...input, page })

  // Fetch data using useFetch hook
  const { data, isLoading, error } =
    useFetch<PopularOrSearchMoviesAPIResponse>(url)

  // Callback to update movies state and handle pagination
  const updateMovies = useCallback(
    (newData: PopularOrSearchMoviesAPIResponse) => {
      setMovies((prevMovies) => {
        // Combine new data with existing movies
        const combinedData =
          page === 1 ? newData.results : [...prevMovies, ...newData.results]
        return getUniqueMoviesData(combinedData)
      })
      // Check if more movies are available
      setHasMore(newData.total_pages > page)
    },
    [page]
  )

  // Effect to update movies when new data is fetched
  useEffect(() => {
    if (data) {
      updateMovies(data)
    }
  }, [data, updateMovies])

  // Effect for initializing and refetching data when input changes
  useEffect(() => {
    setPage(1)
    setMovies([])
  }, [input])

  // Function to fetch the next page of movies
  const fetchNextPage = () => {
    if (hasMore && !isLoading) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  // Return the state and functions to be used by the component
  return { movies, isLoading, error, hasMore, fetchNextPage }
}
