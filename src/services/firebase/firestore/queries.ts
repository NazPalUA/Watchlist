import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { auth } from "../firebase-auth"
import { getWatchlistData, getWatchlistsData } from "./endPoints"

export const useGetWatchlistsDataQuery = () => {
  const { currentUser } = auth
  const queryClient = useQueryClient()

  const watchlists = useQuery({
    queryKey: ["watchlists"],
    queryFn: () =>
      currentUser ? getWatchlistsData(currentUser.uid) : undefined,
    enabled: !!currentUser?.uid,
  })

  useEffect(() => {
    if (watchlists.isSuccess && watchlists.data) {
      watchlists.data.forEach((watchlist) => {
        queryClient.setQueryData(["watchlists", watchlist.id], watchlist)
      })
    }
  }, [watchlists.data])
  return { ...watchlists }
}

export const useGetWatchlistDataQuery = (watchlistId: string) => {
  const { currentUser } = auth

  return useQuery({
    queryKey: ["watchlists", watchlistId],
    queryFn: () => {
      return currentUser
        ? getWatchlistData(currentUser.uid, watchlistId)
        : undefined
    },
    enabled: !!currentUser?.uid,
  })
}
