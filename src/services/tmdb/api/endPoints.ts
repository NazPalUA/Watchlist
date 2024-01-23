import { fetchTmdbApi } from './api'
import { MovieCredits, MovieDetails, MoviesWithPerson, PersonDetails, SearchMovieResults, 
    SearchPeople, PopularMovies, RecommendedMovies } from '../types'

export const getMovieDetails = async (movieId: string) => 
    fetchTmdbApi<MovieDetails>(
        `/movie/${movieId}`)

export const getMovieCredits = async (movieId: string) => 
    fetchTmdbApi<MovieCredits>(
        `/movie/${movieId}/credits`)

export const getMovieRecommendations = async (movieId: string, page: number = 1) => 
    fetchTmdbApi<RecommendedMovies>(
        `/movie/${movieId}/recommendations?page=${page}`)

export const getPersonDetails = async (personId: string) => 
    fetchTmdbApi<PersonDetails>(
        `/person/${personId}`)

export const getMoviesWithPerson = async (personId: string, page: number = 1) => 
    fetchTmdbApi<MoviesWithPerson>(
        `/discover/movie?with_people=${personId}&page=${page}`)

export const getPopularMovies = async (page: number = 1) => 
    fetchTmdbApi<PopularMovies>(
        `/movie/popular?page=${page}`)

export const searchMovies = async (query: string, page: number = 1) => 
    fetchTmdbApi<SearchMovieResults>(
        `/search/movie?query=${encodeURIComponent(query)}&page=${page}`)

export const searchPeople = async (query: string, page: number = 1) => 
    fetchTmdbApi<SearchPeople>(
        `/search/person?query=${encodeURIComponent(query)}&page=${page}`)