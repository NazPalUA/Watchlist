import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useGetUserQuery } from "../auth/queries"
import {
  addMovieToWatchlist,
  createWatchlist,
  deleteWatchlist,
  editWatchlist,
  removeMovieFromWatchlist,
} from "./endPoints"
import { ManageWatchlistData } from "./types"

export const useCreateWatchlistMutation = () => {
  const { data: currentUser } = useGetUserQuery()
  const queryClient = useQueryClient()
  if (!currentUser) throw new Error("User is not signed in")
  return useMutation({
    mutationFn: (WatchlistData: ManageWatchlistData) =>
      createWatchlist(currentUser.uid, WatchlistData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlists"],
      })
    },
  })
}

export const useEditWatchlistMutation = (watchlistId: string) => {
  const { data: currentUser } = useGetUserQuery()
  const queryClient = useQueryClient()
  if (!currentUser) throw new Error("User is not signed in")
  return useMutation({
    mutationFn: (WatchlistData: ManageWatchlistData) =>
      editWatchlist(currentUser.uid, watchlistId, WatchlistData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlists", watchlistId],
      })
      queryClient.invalidateQueries({
        queryKey: ["watchlists"],
      })
    },
  })
}

export const useDeleteWatchlistMutation = () => {
  const { data: currentUser } = useGetUserQuery()
  const queryClient = useQueryClient()
  if (!currentUser) throw new Error("User is not signed in")
  return useMutation({
    mutationFn: (watchlistId: string) =>
      deleteWatchlist(currentUser.uid, watchlistId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlists"],
      })
    },
  })
}

export const useAddMovieToWatchlistMutation = (watchlistId: string) => {
  const { data: currentUser } = useGetUserQuery()
  const queryClient = useQueryClient()
  if (!currentUser) throw new Error("User is not signed in")
  return useMutation({
    mutationFn: (movieId: string) =>
      addMovieToWatchlist(currentUser.uid, watchlistId, movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlists", watchlistId],
      })
    },
  })
}

export const useRemoveMovieFromWatchlistMutation = (
  watchlistId: string,
  movieId: string
) => {
  const { data: currentUser } = useGetUserQuery()
  const queryClient = useQueryClient()
  if (!currentUser) throw new Error("User is not signed in")
  return useMutation({
    mutationFn: () =>
      removeMovieFromWatchlist(currentUser.uid, watchlistId, movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlists", watchlistId],
      })
    },
  })
}

export const useRemoveMoviesFromWatchlistMutation = (watchlistId: string) => {
  const { data: currentUser } = useGetUserQuery()
  const queryClient = useQueryClient()
  if (!currentUser) throw new Error("User is not signed in")
  return useMutation({
    mutationFn: (movieIds: string[]) => {
      const promises = movieIds.map((movieId) =>
        removeMovieFromWatchlist(currentUser.uid, watchlistId, movieId)
      )
      return Promise.all(promises)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlists", watchlistId],
      })
    },
  })
}
