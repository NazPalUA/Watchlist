import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

import {
  getMovieDetails,
  getMovieRecommendations,
  getMoviesWithPerson,
  getPopularMovies,
} from "./requests"

export const useMovieDetails = (movieId: string) =>
  useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovieDetails(movieId),
  })

export const useMoviesDetails = (movieIdsArr: string[]) => {
  return useQuery({
    queryKey: ["movies", movieIdsArr],
    queryFn: async () => {
      if (movieIdsArr) {
        const promises = movieIdsArr.map((movieId) => getMovieDetails(movieId))
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
    queryFn: () => getMovieRecommendations(movieId, page),
  })

export const useMoviesWithPerson = (personId: string, page: number = 1) =>
  useQuery({
    queryKey: ["movies", "with", personId, page],
    queryFn: () => getMoviesWithPerson(personId, page),
  })

export const usePopularMovies = (page: number = 1) =>
  useQuery({
    queryKey: ["movies", "popular", page],
    queryFn: () => getPopularMovies(page),
  })

export const useInfinitePopularMovies = () =>
  useInfiniteQuery({
    queryKey: ["movies", "popular", "infinite"],
    queryFn: ({ pageParam }) => getPopularMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (data) => {
      if (data.results.length === 0 || data.page === data.total_pages)
        return undefined
      return data.page + 1
    },
  })
