import {
  MovieCredits,
  MovieDetails,
  MoviesWithPerson,
  PersonDetails,
  PopularMovies,
  RecommendedMovies,
  SearchMovieResults,
  SearchPeople,
} from "../model"
import { fetchTmdbApi } from "./api"

export const getMovieDetails = async (movieId: string) =>
  fetchTmdbApi<MovieDetails>(`/movie/${movieId}`)

export const getMovieCredits = async (movieId: string) =>
  fetchTmdbApi<MovieCredits>(`/movie/${movieId}/credits`)

export const getMovieRecommendations = async (
  movieId: string,
  page: number = 1
) =>
  fetchTmdbApi<RecommendedMovies>(`/movie/${movieId}/recommendations`, {
    page,
  })

export const getPersonDetails = async (personId: string) =>
  fetchTmdbApi<PersonDetails>(`/person/${personId}`)

export const getMoviesWithPerson = async (personId: string, page: number = 1) =>
  fetchTmdbApi<MoviesWithPerson>(`/discover/movie?with_people=${personId}`, {
    page,
  })

export const getPopularMovies = async (page: number = 1) =>
  fetchTmdbApi<PopularMovies>(`/movie/popular`, { page })

export const searchMovies = async (query: string, page: number = 1) =>
  fetchTmdbApi<SearchMovieResults>(
    `/search/movie?query=${encodeURIComponent(query)}`,
    { page }
  )

export const searchPeople = async (query: string, page: number = 1) =>
  fetchTmdbApi<SearchPeople>(
    `/search/person?query=${encodeURIComponent(query)}`,
    { page }
  )
