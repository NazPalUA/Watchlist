import { fetchFromTmdb } from "../../../shared/api/tmdb/lib/fetchFromTmdb"

import { MovieDetails } from "../model/MovieDetails"
import { MoviesWithPerson } from "../model/MoviesWithPerson"

import { PopularMovies } from "../model/PopularMovies"
import { RecommendedMovies } from "../model/RecommendedMovies"

export const fetchMovieDetails = (movieId: string) =>
  fetchFromTmdb<MovieDetails>(`/movie/${movieId}`)

export const fetchMovieRecommendations = (movieId: string, page: number = 1) =>
  fetchFromTmdb<RecommendedMovies>(
    `/movie/${movieId}/recommendations`,
    {
      page,
    },
    true
  )
export const fetchMoviesWithPerson = (personId: string, page: number = 1) =>
  fetchFromTmdb<MoviesWithPerson>(
    `/discover/movie`,
    {
      with_people: personId,
      page,
    },
    true
  )

export const fetchPopularMovies = (page: number = 1) =>
  fetchFromTmdb<PopularMovies>(`/movie/popular`, { page }, true)
