import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useGetUserQuery } from "../../../../entities/session/api/queries/hooks"
import { TWatchlistSchema } from "../../../../types/form-watchlist"
import {
  addMovieToWatchlist,
  addUserData,
  createWatchlist,
  deleteWatchlist,
  editUserData,
  editWatchlist,
  removeMovieFromWatchlist,
} from "./endPoints"

type InputUserData = {
  name: string
  email: string
  photoURL?: string
}
type AddUserData = {
  userId: string
  data: InputUserData
}
export const useAddUserData = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ userId, data }: AddUserData) => {
      if (!userId) throw new Error("User ID is required")
      return addUserData(userId, {
        name: data.name,
        photoURL: data.photoURL,
        email: data.email,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userData"],
      })
    },
  })
}

export const useEditUserData = () => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ name }: { name: string }) => {
      if (!userId) throw new Error("User ID is required")
      return editUserData(userId, { name })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userData"],
      })
    },
  })
}

export const useCreateWatchlistMutation = () => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ name, description }: TWatchlistSchema) => {
      if (!userId) throw new Error("User ID is required")
      return createWatchlist(userId, { name, description })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlists"],
      })
    },
  })
}

export const useEditWatchlistMutation = (watchlistId: string) => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (WatchlistData: TWatchlistSchema) => {
      if (!userId) throw new Error("User ID is required")
      return editWatchlist(userId, watchlistId, WatchlistData)
    },
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
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (watchlistId: string) => {
      if (!userId) throw new Error("User ID is required")
      return deleteWatchlist(userId, watchlistId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlists"],
      })
    },
  })
}

export const useAddMovieToWatchlistMutation = (watchlistId: string) => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (movieId: string) => {
      if (!userId) throw new Error("User ID is required")
      return addMovieToWatchlist(userId, watchlistId, movieId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlistMovies", watchlistId],
      })
    },
  })
}

export const useRemoveMovieFromWatchlistMutation = (
  watchlistId: string,
  movieId: string
) => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => {
      if (!userId) throw new Error("User ID is required")
      return removeMovieFromWatchlist(userId, watchlistId, movieId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlistMovies", watchlistId],
      })
    },
  })
}

export const useAddToWatchedMutation = () => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (movieId: string) => {
      if (!userId) throw new Error("User ID is required")
      return addMovieToWatchlist(userId, "watched", movieId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchedMovies"],
      })
    },
  })
}

export const useRemoveFromWatchedMutation = (movieId: string) => {
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => {
      if (!userId) throw new Error("User ID is required")
      return removeMovieFromWatchlist(userId, "watched", movieId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchedMovies"],
      })
    },
  })
}
