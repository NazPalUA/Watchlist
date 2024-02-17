import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import { db } from "./firebase-config"

type GetWatchlistType = {
  name: string
  description: string
  id: string
  dateCreated: string
}

export const useGetWatchlists = () => {
  let authContext = useAuthContext()
  let userId = authContext.user?.userID
  const watchlistCollection = collection(db, `users/${userId}/watchlists`)

  const [watchlists, setWatchlists] = useState<GetWatchlistType[]>([])

  const getWatchlists = async () => {
    let unsubscribe
    try {
      unsubscribe = onSnapshot(watchlistCollection, async (snapshot) => {
        let watchlistsData: GetWatchlistType[] = []
        snapshot.forEach((doc) => {
          watchlistsData.push(doc.data() as GetWatchlistType)
        })
        setWatchlists(watchlistsData)
      })
    } catch (error) {
      console.error("Error getting watchlists: ", error)
    }
    return unsubscribe
  }

  useEffect(() => {
    getWatchlists()
  }, [])
  return { watchlists }
}
