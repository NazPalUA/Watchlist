import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../../../context/AuthContext"
import {
  getMovieData,
  getMoviesData,
  getWatchlistData,
  getWatchlistsData,
} from "./endPoints"

export const useGetWatchlistsDataQuery = () => {
  const { currentUser } = useAuth()
  return useQuery({
    queryKey: [currentUser?.uid, "watchlists"],
    queryFn: () =>
      currentUser ? getWatchlistsData(currentUser.uid) : undefined,
  })
}

export const useGetWatchlistDataQuery = (watchlistId: string) => {
  const { currentUser } = useAuth()
  return useQuery({
    queryKey: [currentUser?.uid, "watchlists", watchlistId],
    queryFn: () =>
      currentUser ? getWatchlistData(currentUser.uid, watchlistId) : undefined,
  })
}

export const useGetMoviesQuery = (watchlistId: string) => {
  const { currentUser } = useAuth()
  return useQuery({
    queryKey: [currentUser?.uid, "watchlists", watchlistId, "movies"],
    queryFn: () =>
      currentUser ? getMoviesData(currentUser.uid, watchlistId) : undefined,
  })
}

export const useGetMovieQuery = (watchlistId: string, movieId: string) => {
  const { currentUser } = useAuth()
  return useQuery({
    queryKey: [currentUser?.uid, "watchlists", watchlistId, "movies", movieId],
    queryFn: () =>
      currentUser
        ? getMovieData(currentUser.uid, watchlistId, movieId)
        : undefined,
  })
}
