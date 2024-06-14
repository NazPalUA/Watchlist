"use client"

import { useEffect, useState } from "react"

// Extend standard fetch request options for custom configurations
type UseFetchOptions = RequestInit

// Define the structure for the hook's return value
type UseFetchResult<T> = {
  data: T | null
  isLoading: boolean
  error: string | null
}

// Generic hook for fetching data, where <T> specifies the expected data type
export default function useFetch<T>(
  url: string | null,
  options?: UseFetchOptions
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // If the URL is null, avoid making a fetch call and set an error
    if (!url) {
      setData(null)
      setError("No URL provided")
      setIsLoading(false)
      return
    }

    // Create an abort controller for canceling the fetch request
    const abortController = new AbortController()
    const { signal } = abortController

    // Async function to perform the data fetching
    const fetchData = async () => {
      setIsLoading(true) // Indicate loading state
      try {
        // Execute fetch with provided options and abort signal
        const response = await fetch(url, { ...options, signal })
        // Check for successful response
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
        // Parse and set the data
        const json = (await response.json()) as T
        setData(json)
        setError(null) // Clear any previous errors
      } catch (err) {
        // Handle errors, excluding the abort errors
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message)
          setData(null)
        } else {
          setError("An unknown error occurred")
        }
      } finally {
        setIsLoading(false) // Reset loading state
      }
    }

    fetchData()

    // Cleanup function: abort fetch request on unmount or URL/options change
    return () => {
      abortController.abort()
    }
  }, [url, options]) // Dependency array: re-run the effect when url or options change

  return { data, isLoading, error }
}
