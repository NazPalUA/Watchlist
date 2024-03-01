import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  addMovieToWatchlist,
  createWatchlist,
  deleteWatchlist,
  editWatchlist,
  removeMovieFromWatchlist,
} from "./endPoints"
import { ManageWatchlistData } from "./types"

export const useCreateWatchlistMutation = (userId: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (WatchlistData: ManageWatchlistData) =>
      createWatchlist(userId, WatchlistData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [userId, "watchlists"] })
    },
  })
}

export const useEditWatchlistMutation = (
  userId: string,
  watchlistId: string
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (WatchlistData: ManageWatchlistData) =>
      editWatchlist(userId, watchlistId, WatchlistData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [userId, "watchlists", watchlistId],
      })
    },
  })
}

export const useDeleteWatchlistMutation = (userId: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (watchlistId: string) => deleteWatchlist(userId, watchlistId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [userId, "watchlists"] })
    },
  })
}

export const useAddMovieToWatchlistMutation = (
  userId: string,
  watchlistId: string
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (movieId: string) =>
      addMovieToWatchlist(userId, watchlistId, movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [userId, "watchlists", watchlistId, "movies"],
      })
    },
  })
}

export const useRemoveMovieFromWatchlistMutation = (
  userId: string,
  watchlistId: string,
  movieId: string
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => removeMovieFromWatchlist(userId, watchlistId, movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [userId, "watchlists", watchlistId, "movies"],
      })
    },
  })
}

export const useRemoveMoviesFromWatchlistMutation = (
  userId: string,
  watchlistId: string
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (movieIds: string[]) => {
      const promises = movieIds.map((movieId) =>
        removeMovieFromWatchlist(userId, watchlistId, movieId)
      )
      return Promise.all(promises)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [userId, "watchlists", watchlistId, "movies"],
      })
    },
  })
}
