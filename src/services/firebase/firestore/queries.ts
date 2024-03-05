import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../../../context/AuthContext"
import { getWatchlistData, getWatchlistsData } from "./endPoints"

export const useGetWatchlistsDataQuery = () => {
  const { currentUser } = useAuth()
  return useQuery({
    queryKey: ["watchlists"],
    queryFn: () =>
      currentUser ? getWatchlistsData(currentUser.uid) : undefined,
  })
}

export const useGetWatchlistDataQuery = (watchlistId: string) => {
  const { currentUser } = useAuth()
  return useQuery({
    queryKey: ["watchlists", watchlistId],
    queryFn: () =>
      currentUser ? getWatchlistData(currentUser.uid, watchlistId) : undefined,
  })
}
