import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import {
  fetchMovieDetails,
  fetchMovieRecommendations,
  fetchMoviesWithPerson,
  fetchPopularMovies,
} from "./requests"

export const useMovieDetails = (movieId: string) =>
  useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => fetchMovieDetails(movieId),
  })

export const useMoviesDetails = (movieIdsArr: string[]) => {
  return useQuery({
    queryKey: ["movies", movieIdsArr],
    queryFn: async () => {
      if (movieIdsArr) {
        const promises = movieIdsArr.map((movieId) =>
          fetchMovieDetails(movieId)
        )
        const moviesData = await Promise.all(promises)
        return moviesData
      }
      return []
    },
  })
}

export const useMovieRecommendations = (movieId: string, page: number = 1) =>
  useQuery({
    queryKey: ["movies", "recommended", movieId, page],
    queryFn: () => fetchMovieRecommendations(movieId, page),
  })

export const useMoviesWithPerson = (personId: string, page: number = 1) =>
  useQuery({
    queryKey: ["movies", "with", personId, page],
    queryFn: () => fetchMoviesWithPerson(personId, page),
  })

export const usePopularMovies = (page: number = 1) =>
  useQuery({
    queryKey: ["movies", "popular", page],
    queryFn: () => fetchPopularMovies(page),
  })

export const useInfinitePopularMovies = () =>
  useInfiniteQuery({
    queryKey: ["movies", "popular", "infinite"],
    queryFn: ({ pageParam }) => fetchPopularMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (data) => {
      if (data.results.length === 0 || data.page === data.total_pages)
        return undefined
      return data.page + 1
    },
  })
