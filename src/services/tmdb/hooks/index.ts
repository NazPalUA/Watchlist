import { useQuery } from '@tanstack/react-query'
import { fetchTmdbApi } from '../api'
import { Credits, MovieDetails, MoviesWithPerson, PersonDetails, SearchMovie, 
    SearchPerson, PopularMovies, Recommendations } from '../types'

const useMovieDetails = (movieId: string) => 
    useQuery({
        queryKey: ["movieDetails", movieId],
        queryFn: () => fetchTmdbApi<MovieDetails>(`/movie/${movieId}`), 
})

const useMovieCredits = (movieId: string) => 
    useQuery({
        queryKey: ["movieCredits", movieId], 
        queryFn: () => fetchTmdbApi<Credits>(`/movie/${movieId}/credits`), 
})

const useMovieRecommendations = (movieId: string, page: number = 1) => 
    useQuery({
        queryKey: ["movieRecommendations", movieId, page], 
        queryFn: () => fetchTmdbApi<Recommendations>(`/movie/${movieId}/recommendations?page=${page}`), 
})

const usePersonDetails = (personId: string) => 
    useQuery({
        queryKey: ["personDetails", personId], 
        queryFn: () => fetchTmdbApi<PersonDetails>(`/person/${personId}`), 
})

const useMoviesWithPerson = (personId: string, page: number = 1) => 
    useQuery({
        queryKey: ["moviesWithPerson", personId, page], 
        queryFn: () => fetchTmdbApi<MoviesWithPerson>(`/discover/movie?with_people=${personId}&page=${page}`), 
})

const usePopularMovies = (page: number = 1) => 
    useQuery({
        queryKey: ["popularMovies", page], 
        queryFn: () => fetchTmdbApi<PopularMovies>(`/movie/popular?page=${page}`), 
})

const useSearchMovie = (query: string, page: number = 1) => 
    useQuery({
        queryKey: ["searchMovie", query, page], 
        queryFn: () => fetchTmdbApi<SearchMovie>(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`), 
})

const useSearchPerson = (query: string, page: number = 1) => 
    useQuery({
        queryKey: ["searchPerson", query, page], 
        queryFn: () => fetchTmdbApi<SearchPerson>(`/search/person?query=${encodeURIComponent(query)}&page=${page}`), 
})


export { useMovieDetails, useMovieCredits, useMovieRecommendations, usePersonDetails, 
    useMoviesWithPerson, usePopularMovies, useSearchMovie, useSearchPerson }