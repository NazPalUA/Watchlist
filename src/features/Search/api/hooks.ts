import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { fetchSearchMovies, fetchSearchPeople } from "./requests"

export const useSearchMovieQuery = (query: string, page: number = 1) =>
  useQuery({
    queryKey: ["movies", "search", query, page],
    queryFn: () => fetchSearchMovies(query, page),
  })

export const useInfiniteSearchMovieQuery = (query: string) =>
  useInfiniteQuery({
    queryKey: ["movies", "search", "infinite", query],
    queryFn: ({ pageParam }) => fetchSearchMovies(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (data) => {
      if (data.results.length === 0 || data.page === data.total_pages)
        return undefined
      return data.page + 1
    },
  })

export const useSearchPeopleQuery = (query: string, page: number = 1) =>
  useQuery({
    queryKey: ["people", "search", query, page],
    queryFn: () => fetchSearchPeople(query, page),
  })

export const useInfiniteSearchPeopleQuery = (query: string) =>
  useInfiniteQuery({
    queryKey: ["people", "search", "infinite", query],
    queryFn: ({ pageParam }) => fetchSearchPeople(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (data) => {
      if (data.results.length === 0 || data.page === data.total_pages)
        return undefined
      return data.page + 1
    },
  })
