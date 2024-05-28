import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import getUniqueMoviesData from "../../lib/utils/getUniqueMoviesData"
import {
  getMovieCredits,
  getMovieDetails,
  getMovieRecommendations,
  getMoviesWithPerson,
  getPersonDetails,
  getPopularMovies,
  searchMovies,
  searchPeople,
} from "./api"

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

export const useSearchMovie = (query: string, page: number = 1) =>
  useQuery({
    queryKey: ["movies", "search", query, page],
    queryFn: () => searchMovies(query, page),
  })

export const useInfiniteSearchMovie = (query: string) =>
  useInfiniteQuery({
    queryKey: ["movies", "search", "infinite", query],
    queryFn: ({ pageParam }) => searchMovies(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (data) => {
      if (data.results.length === 0 || data.page === data.total_pages)
        return undefined
      return data.page + 1
    },
  })

export const useSearchPeople = (query: string, page: number = 1) =>
  useQuery({
    queryKey: ["people", "search", query, page],
    queryFn: () => searchPeople(query, page),
  })

export const useInfiniteSearchPeople = (query: string) =>
  useInfiniteQuery({
    queryKey: ["people", "search", "infinite", query],
    queryFn: ({ pageParam }) => searchPeople(query, pageParam),
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
      let uniqueRecommendedMovies = getUniqueMoviesData(
        recommendedMovies.results
      )

      while (
        uniqueRecommendedMovies.length < length &&
        recommendedMovies.total_pages > recommendedPage
      ) {
        recommendedPage++
        recommendedMovies = await getMovieRecommendations(
          movieId,
          recommendedPage
        )
        uniqueRecommendedMovies = getUniqueMoviesData([
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
        uniqueRecommendedMovies = getUniqueMoviesData([
          ...uniqueRecommendedMovies,
          ...popularMovies.results,
        ])
      }

      return uniqueRecommendedMovies.slice(0, length)
    },
  })
