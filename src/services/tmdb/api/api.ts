import axios from 'axios'
import { MovieDetails, SearchMovie, SearchPerson, Recommendations, PopularMovies, Credits, MoviesWithPerson, PersonDetails } from '../types'

const apiKey = import.meta.env.VITE_TMDB_API_KEY
const baseUrl = 'https://api.themoviedb.org/3'

export const getPopularMovies = async (page: number) => {
    const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
    return response.data as PopularMovies
}

export const searchMovie = async (query: string, page: number) => {
    const response = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=${page}`)
    return response.data as SearchMovie
}

export const searchPerson = async (query: string, page: number) => {
    const response = await axios.get(`${baseUrl}/search/person?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=${page}`)
    return response.data as SearchPerson
}

export const getMovieDetails = async (movieId: string) => {
    const response = await axios.get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    return response.data as MovieDetails
}

export const getPersonDetails = async (personId: string) => {
    const response = await axios.get(`${baseUrl}/person/${personId}?api_key=${apiKey}&language=en-US`)
    return response.data as PersonDetails
}

export const getMoviesWithPerson = async (personId: string, page: number) => {
    const response = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_people=${personId}&language=en-US&page=${page}`)
    return response.data as MoviesWithPerson
}

export const getMovieCredits = async (movieId: string) => {
    const response = await axios.get(`${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
    return response.data as Credits
}

export const getMovieRecommendations = async (movieId: string, page: number) => {
    const response = await axios.get(`${baseUrl}/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=${page}`)
    return response.data as Recommendations
}
