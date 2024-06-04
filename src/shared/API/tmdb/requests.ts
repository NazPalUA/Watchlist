import { fetchFromTmdb } from "./lib/fetchFromTmdb"
import {
  MovieCredits,
  MovieDetails,
  MoviesWithPerson,
  PersonDetails,
  PopularMovies,
  RecommendedMovies,
} from "./model"
export const getMovieDetails = (movieId: string) =>
  fetchFromTmdb<MovieDetails>(`/movie/${movieId}`)

export const getMovieCredits = (movieId: string) =>
  fetchFromTmdb<MovieCredits>(`/movie/${movieId}/credits`)

export const getMovieRecommendations = (movieId: string, page: number = 1) =>
  fetchFromTmdb<RecommendedMovies>(
    `/movie/${movieId}/recommendations`,
    {
      page,
    },
    true
  )

export const getPersonDetails = (personId: string) =>
  fetchFromTmdb<PersonDetails>(`/person/${personId}`)

export const getMoviesWithPerson = (personId: string, page: number = 1) =>
  fetchFromTmdb<MoviesWithPerson>(
    `/discover/movie`,
    {
      with_people: personId,
      page,
    },
    true
  )

export const getPopularMovies = (page: number = 1) =>
  fetchFromTmdb<PopularMovies>(`/movie/popular`, { page }, true)
