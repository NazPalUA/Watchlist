import { fetchFromTmdb } from "../../../shared/api/tmdb/lib/fetchFromTmdb"

import { MovieDetails } from "../model/MovieDetails"
import { MoviesWithPerson } from "../model/MoviesWithPerson"

import { PopularMovies } from "../model/PopularMovies"
import { RecommendedMovies } from "../model/RecommendedMovies"

export const getMovieDetails = (movieId: string) =>
  fetchFromTmdb<MovieDetails>(`/movie/${movieId}`)

export const getMovieRecommendations = (movieId: string, page: number = 1) =>
  fetchFromTmdb<RecommendedMovies>(
    `/movie/${movieId}/recommendations`,
    {
      page,
    },
    true
  )
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
