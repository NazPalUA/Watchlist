import { useQuery } from "@tanstack/react-query"
import { useGetUserQuery } from "../../auth/queries"
import {
  getSingleWatchedMovie,
  getSingleWatchlist,
  getSingleWatchlistMovie,
  getUserData,
  getWatchedMovies,
  getWatchlistMovies,
  getWatchlists,
} from "./endPoints"

export const useGetUserDataQuery = () => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid

  return useQuery({
    queryKey: ["userData"],
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getUserData(userId)
    },
    enabled: !!currentUser,
  })
}

export const useGetWatchlistsQuery = () => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid

  return useQuery({
    queryKey: ["watchlists"],
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getWatchlists(userId)
    },
    enabled: !!currentUser,
  })
}

export const useGetSingleWatchlistQuery = (watchlistId: string) => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid

  return useQuery({
    queryKey: ["watchlists", watchlistId],
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getSingleWatchlist(userId, watchlistId)
    },
    enabled: !!currentUser,
    initialData: () => {
      const { data: watchlists } = useGetWatchlistsQuery()
      const watchlist = watchlists?.find((w) => w.id === watchlistId)
      return watchlist
    },
  })
}

export const useGetWatchedMoviesQuery = () => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid

  return useQuery({
    queryKey: ["watchedMovies"],
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getWatchedMovies(userId)
    },
    enabled: !!currentUser,
  })
}

export const useGetSingleWatchedMovieQuery = (movieId: string) => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid

  return useQuery({
    queryKey: ["watchedMovies", movieId],
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getSingleWatchedMovie(userId, movieId)
    },
    enabled: !!currentUser,
    initialData: () => {
      const { data: watchedMovies } = useGetWatchedMoviesQuery()
      const watchedMovie = watchedMovies?.find((w) => w.tmdbId === movieId)
      return watchedMovie
    },
  })
}

export const useGetWatchlistMoviesQuery = (watchlistId: string) => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid

  return useQuery({
    queryKey: ["watchlistMovies", watchlistId],
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
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid

  return useQuery({
    queryKey: ["watchlistMovies", watchlistId, movieId],
    queryFn: () => {
      if (!userId) throw new Error("User ID is required")
      return getSingleWatchlistMovie(userId, watchlistId, movieId)
    },
    enabled: !!currentUser,
    initialData: () => {
      const { data: watchlistMovies } = useGetWatchlistMoviesQuery(watchlistId)
      const watchlistMovie = watchlistMovies?.find((w) => w.tmdbId === movieId)
      return watchlistMovie
    },
  })
}
