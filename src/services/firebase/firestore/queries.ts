import { useQuery } from "@tanstack/react-query"
import { auth } from "../auth/firebase-auth"
import { getWatchlistData, getWatchlistsData } from "./endPoints"

export const useGetWatchlistsDataQuery = () => {
  const { currentUser } = auth

  return useQuery({
    queryKey: ["watchlists"],
    queryFn: () =>
      currentUser ? getWatchlistsData(currentUser.uid) : undefined,
    enabled: !!currentUser?.uid,
  })
}

export const useGetWatchlistDataQuery = (watchlistId: string) => {
  const { currentUser } = auth

  const { data: watchlists } = useGetWatchlistsDataQuery()
  const watchlist = watchlists?.find((w) => w.id === watchlistId)

  return useQuery({
    queryKey: ["watchlists", watchlistId],
    queryFn: () => {
      return currentUser
        ? getWatchlistData(currentUser.uid, watchlistId)
        : undefined
    },
    enabled: !!currentUser?.uid,
    initialData: watchlist,
  })
}
