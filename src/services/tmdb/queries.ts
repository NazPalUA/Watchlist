import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getMovieDetails, getMovieCredits, getMovieRecommendations, 
    getPersonDetails, getMoviesWithPerson, getPopularMovies, 
    searchMovies, searchPeople } from './api'

export const useMovieDetails = (movieId: string) => 
    useQuery({
        queryKey: ["movie", movieId],
        queryFn: () => getMovieDetails(movieId),
})

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
    useInfiniteQuery ({
        queryKey: ["movies", "popular", "infinite"], 
        queryFn: ({ pageParam }) => getPopularMovies(pageParam),
        initialPageParam: 1,
        getNextPageParam: (data) => data.page + 1
})

export const useSearchMovie = (query: string, page: number = 1) => 
    useQuery({
        queryKey: ["movies", "search", query, page], 
        queryFn: () => searchMovies(query, page),
})


export const useInfiniteSearchMovie = (query: string) => 
    useInfiniteQuery ({
        queryKey: ["movies", "search", "infinite", query], 
        queryFn: ({ pageParam }) => searchMovies(query, pageParam),
        initialPageParam: 1,
        getNextPageParam: (data) => data.page + 1
})

export const useSearchPeople = (query: string, page: number = 1) => 
    useQuery({
        queryKey: ["people", "search", query, page],
        queryFn: () => searchPeople(query, page), 
})

export const useInfiniteSearchPeople = (query: string) => 
    useInfiniteQuery ({
        queryKey: ["people", "search", "infinite", query],
        queryFn: ({ pageParam }) => searchPeople(query, pageParam),
        initialPageParam: 1,
        getNextPageParam: (data) => data.page + 1
})