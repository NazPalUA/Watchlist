import type {
  MovieDetails,
  MoviesWithPerson,
  PopularMovies,
  RecommendedMovies,
} from "../../../shared/api/tmdb"
import { fetchFromTmdb } from "../../../shared/api/tmdb"

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
