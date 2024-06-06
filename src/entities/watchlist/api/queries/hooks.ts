import { useQuery } from "@tanstack/react-query"
import { useSessionQuery } from "../../../session"
import { queryKeys } from "../queryKeys"
import {
  getSingleWatchedMovie,
  getSingleWatchlist,
  getSingleWatchlistMovie,
  getWatchedMovies,
  getWatchlistMovies,
  getWatchlists,
} from "./requests"

const {
  ALL_WATCHLISTS,
  WATCHLIST,
  ALL_WATCHED_MOVIES,
  WATCHED_MOVIE,
  ALL_WATCHLIST_MOVIES,
  WATCHLIST_MOVIE,
} = queryKeys

export const useGetWatchlistsQuery = () => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid

  return useQuery({
    queryKey: ALL_WATCHLISTS,
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getWatchlists(userId)
    },
    enabled: !!currentUser,
  })
}

export const useGetSingleWatchlistQuery = (watchlistId: string) => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid

  const { data: watchlists } = useGetWatchlistsQuery()

  return useQuery({
    queryKey: WATCHLIST(watchlistId),
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getSingleWatchlist(userId, watchlistId)
    },
    enabled: !!currentUser,
    initialData: () => {
      const watchlist = watchlists?.find((w) => w.id === watchlistId)
      return watchlist
    },
  })
}

export const useGetWatchedMoviesQuery = () => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid

  return useQuery({
    queryKey: ALL_WATCHED_MOVIES,
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getWatchedMovies(userId)
    },
    enabled: !!currentUser,
  })
}

export const useGetSingleWatchedMovieQuery = (movieId: string) => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid

  const { data: watchedMovies } = useGetWatchedMoviesQuery()
  return useQuery({
    queryKey: WATCHED_MOVIE(movieId),
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getSingleWatchedMovie(userId, movieId)
    },
    enabled: !!currentUser,
    initialData: () => {
      const watchedMovie = watchedMovies?.find((w) => w.tmdbId === movieId)
      return watchedMovie
    },
  })
}

export const useGetWatchlistMoviesQuery = (watchlistId: string) => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid

  return useQuery({
    queryKey: ALL_WATCHLIST_MOVIES(watchlistId),
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getWatchlistMovies(userId, watchlistId)
    },
    enabled: !!currentUser,
  })
}

export const useGetSingleWatchlistMovieQuery = (
  watchlistId: string,
  movieId: string
) => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid

  const { data: watchlistMovies } = useGetWatchlistMoviesQuery(watchlistId)
  return useQuery({
    queryKey: WATCHLIST_MOVIE(watchlistId, movieId),
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getSingleWatchlistMovie(userId, watchlistId, movieId)
    },
    enabled: !!currentUser,
    initialData: () => {
      const watchlistMovie = watchlistMovies?.find((w) => w.tmdbId === movieId)
      return watchlistMovie
    },
  })
}
