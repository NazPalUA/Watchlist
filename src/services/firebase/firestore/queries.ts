import { useQuery } from "@tanstack/react-query"
import {
  getMovieData,
  getMoviesData,
  getWatchlistData,
  getWatchlistsData,
} from "./endPoints"

export const useGetWatchlistsDataQuery = (userId: string) => {
  return useQuery({
    queryKey: [userId, "watchlists"],
    queryFn: () => getWatchlistsData(userId),
  })
}

export const useGetWatchlistDataQuery = (
  userId: string,
  watchlistId: string
) => {
  return useQuery({
    queryKey: [userId, "watchlists", watchlistId],
    queryFn: () => getWatchlistData(userId, watchlistId),
  })
}

export const useGetMoviesQuery = (userId: string, watchlistId: string) => {
  return useQuery({
    queryKey: [userId, "watchlists", watchlistId, "movies"],
    queryFn: () => getMoviesData(userId, watchlistId),
  })
}

export const useGetMovieQuery = (
  userId: string,
  watchlistId: string,
  movieId: string
) => {
  return useQuery({
    queryKey: [userId, "watchlists", watchlistId, "movies", movieId],
    queryFn: () => getMovieData(userId, watchlistId, movieId),
  })
}
