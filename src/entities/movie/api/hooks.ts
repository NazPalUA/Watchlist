import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import {
  fetchMovieDetails,
  fetchMovieRecommendations,
  fetchMoviesWithPerson,
  fetchPopularMovies,
} from "./requests"

export const useMovieDetailsQuery = (movieId: string) =>
  useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => fetchMovieDetails(movieId),
  })

export const useMoviesDetailsQuery = (movieIdsArr: string[]) => {
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

export const useMovieRecommendationsQuery = (
  movieId: string,
  page: number = 1
) =>
  useQuery({
    queryKey: ["movies", "recommended", movieId, page],
    queryFn: () => fetchMovieRecommendations(movieId, page),
  })

export const useMoviesWithPersonQuery = (personId: string, page: number = 1) =>
  useQuery({
    queryKey: ["movies", "with", personId, page],
    queryFn: () => fetchMoviesWithPerson(personId, page),
  })

export const usePopularMoviesQuery = (page: number = 1) =>
  useQuery({
    queryKey: ["movies", "popular", page],
    queryFn: () => fetchPopularMovies(page),
  })

export const useInfinitePopularMoviesQuery = () =>
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
