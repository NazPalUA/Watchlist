import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSessionQuery } from "../../../session"
import { TWatchlistSchema } from "../../model/watchlistSchema"
import { queryKeys } from "../queryKeys"
import {
  addMovieToWatchlist,
  createWatchlist,
  deleteWatchlist,
  editWatchlist,
  removeMovieFromWatchlist,
} from "./requests"

const { ALL_WATCHLISTS, WATCHLIST, ALL_WATCHED_MOVIES, ALL_WATCHLIST_MOVIES } =
  queryKeys

export const useCreateWatchlistMutation = () => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ name, description }: TWatchlistSchema) => {
      if (!userId) throw new Error("User ID is required")
      return createWatchlist(userId, { name, description })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ALL_WATCHLISTS,
      })
    },
  })
}

export const useEditWatchlistMutation = (watchlistId: string) => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (WatchlistData: TWatchlistSchema) => {
      if (!userId) throw new Error("User ID is required")
      return editWatchlist(userId, watchlistId, WatchlistData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: WATCHLIST(watchlistId),
      })
      queryClient.invalidateQueries({
        queryKey: ALL_WATCHLISTS,
      })
    },
  })
}

export const useDeleteWatchlistMutation = () => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (watchlistId: string) => {
      if (!userId) throw new Error("User ID is required")
      return deleteWatchlist(userId, watchlistId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ALL_WATCHLISTS,
      })
    },
  })
}

export const useAddMovieToWatchlistMutation = (watchlistId: string) => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (movieId: string) => {
      if (!userId) throw new Error("User ID is required")
      return addMovieToWatchlist(userId, watchlistId, movieId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ALL_WATCHLIST_MOVIES(watchlistId),
      })
    },
  })
}

export const useRemoveMovieFromWatchlistMutation = (
  watchlistId: string,
  movieId: string
) => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => {
      if (!userId) throw new Error("User ID is required")
      return removeMovieFromWatchlist(userId, watchlistId, movieId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ALL_WATCHLIST_MOVIES(watchlistId),
      })
    },
  })
}

export const useAddToWatchedMutation = () => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (movieId: string) => {
      if (!userId) throw new Error("User ID is required")
      return addMovieToWatchlist(userId, "watched", movieId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ALL_WATCHED_MOVIES,
      })
    },
  })
}

export const useRemoveFromWatchedMutation = (movieId: string) => {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => {
      if (!userId) throw new Error("User ID is required")
      return removeMovieFromWatchlist(userId, "watched", movieId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ALL_WATCHED_MOVIES,
      })
    },
  })
}
