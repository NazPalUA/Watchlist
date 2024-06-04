import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getUniqueMovies } from "../../lib/utils/getUniqueMovies"
import {
  getMovieCredits,
  getMovieDetails,
  getMovieRecommendations,
  getMoviesWithPerson,
  getPersonDetails,
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

export const useMovieCredits = (movieId: string) =>
  useQuery({
    queryKey: ["credits", movieId],
    queryFn: () => getMovieCredits(movieId),
  })

export const useMovieRecommendations = (movieId: string, page: number = 1) =>
  useQuery({
    queryKey: ["movies", "recommended", movieId, page],
    queryFn: () => getMovieRecommendations(movieId, page),
  })

export const usePersonDetails = (personId: string) =>
  useQuery({
    queryKey: ["person", personId],
    queryFn: () => getPersonDetails(personId),
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

export const useRelatedMovies = (movieId: string, length: number) =>
  useQuery({
    queryKey: ["movies", "related", movieId],
    queryFn: async () => {
      let recommendedPage = 1
      let recommendedMovies = await getMovieRecommendations(
        movieId,
        recommendedPage
      )
      let uniqueRecommendedMovies = getUniqueMovies(recommendedMovies.results)

      while (
        uniqueRecommendedMovies.length < length &&
        recommendedMovies.total_pages > recommendedPage
      ) {
        recommendedPage++
        recommendedMovies = await getMovieRecommendations(
          movieId,
          recommendedPage
        )
        uniqueRecommendedMovies = getUniqueMovies([
          ...uniqueRecommendedMovies,
          ...recommendedMovies.results,
        ])
      }

      let popularPage = 1
      let popularMovies = await getPopularMovies(popularPage)

      while (
        uniqueRecommendedMovies.length < length &&
        popularMovies.total_pages > popularPage
      ) {
        popularPage++
        popularMovies = await getPopularMovies(popularPage)
        uniqueRecommendedMovies = getUniqueMovies([
          ...uniqueRecommendedMovies,
          ...popularMovies.results,
        ])
      }

      return uniqueRecommendedMovies.slice(0, length)
    },
  })
