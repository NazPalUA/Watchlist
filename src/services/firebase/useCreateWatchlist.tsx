import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { nanoid } from "nanoid"
import { useAuthContext } from "../../context/AuthContext"
import { db } from "./firebase-config"

type CreateWatchlistType = {
  name: string
  description: string
}

export const useCreateWatchlist = () => {
  let authContext = useAuthContext()
  let userId = authContext.user?.userID

  const watchlistCollection = collection(db, `users/${userId}/watchlists`)

  const createWatchlist = async (watchlist: CreateWatchlistType) => {
    const watchlistId = nanoid()
    await addDoc(watchlistCollection, {
      ...watchlist,
      id: watchlistId,
      dateCreated: serverTimestamp(),
    })
  }
  return { createWatchlist }
}
