// WatchlistContext.tsx
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore"
import { FC, ReactNode, createContext, useContext } from "react"
import { db } from "../services/firebase/firebase-config"
import { useUser } from "./UserContext"

type TMDBMovieID = string

type Movie = {
  addedAt: Date
  TMDBMovieID: TMDBMovieID
}

type Name = string
type Description = string

export type Watchlist = {
  name: Name
  description: Description
  createdAt: Date
}

type CreateWatchlist = {
  name: Name
  description: Description
}

export type WatchlistsData = (Watchlist & { id: string })[]

type EditWatchlist = CreateWatchlist & {
  watchlistId: string
}

type ManageMovieInWatchlist = {
  movieId: TMDBMovieID
  watchlistId: string
}

export type DeleteMoviesFromWatchlist = {
  movieIds: TMDBMovieID[]
  watchlistId: string
}

type WatchlistContextProps = {
  createWatchlist: (data: CreateWatchlist) => Promise<void>
  editWatchlist: (data: EditWatchlist) => Promise<void>
  deleteWatchlist: (watchlistId: string) => Promise<void>
  addMovieToWatchlist: (data: ManageMovieInWatchlist) => Promise<void>
  deleteMovieFromWatchlist: (data: ManageMovieInWatchlist) => Promise<void>
  deleteMoviesFromWatchlist: (data: DeleteMoviesFromWatchlist) => Promise<void>
  getWatchlistData: (watchlistId: string) => Promise<Watchlist>
  getWatchlistsData: () => Promise<WatchlistsData>
  getMovieIds: (watchlistId: string) => Promise<string[]>
}

const WatchlistContext = createContext<WatchlistContextProps | null>(null)

type WatchlistsContextProviderProps = {
  children: ReactNode
}

export const WatchlistsContextProvider: FC<WatchlistsContextProviderProps> = ({
  children,
}) => {
  const { user } = useUser()
  const userId = user?.uid
  const watchlistsCollection = collection(db, `users/${userId}/watchlists`)

  const createWatchlist = async ({ name, description }: CreateWatchlist) => {
    try {
      const watchlistRef = await addDoc(watchlistsCollection, {
        name,
        description,
        createdAt: new Date(),
      })
      console.log("Watchlist document written with ID: ", watchlistRef.id)
    } catch (e) {
      console.error("Error adding watchlist document: ", e)
    }
  }

  const editWatchlist = async ({
    name,
    description,
    watchlistId,
  }: EditWatchlist) => {
    const watchlistRef = doc(watchlistsCollection, watchlistId)
    try {
      await updateDoc(watchlistRef, { name, description })
    } catch (e) {
      console.error("Error updating watchlist document: ", e)
    }
  }

  const deleteWatchlist = async (watchlistId: string) => {
    const watchlistRef = doc(watchlistsCollection, watchlistId)
    try {
      deleteDoc(watchlistRef)
    } catch (e) {
      console.error("Error deleting watchlist document: ", e)
    }
  }

  const addMovieToWatchlist = async ({
    movieId,
    watchlistId,
  }: ManageMovieInWatchlist) => {
    const watchlistRef = doc(watchlistsCollection, watchlistId)
    const moviesCollection = collection(watchlistRef, "movies")
    try {
      const movieRef = await addDoc(moviesCollection, {
        addedAt: new Date(),
        TMDBMovieID: movieId,
      })
      console.log("Movie document written with ID: ", movieRef.id)
    } catch (e) {
      console.error("Error adding movie document: ", e)
    }
  }

  const deleteMovieFromWatchlist = async ({
    movieId,
    watchlistId,
  }: ManageMovieInWatchlist) => {
    const watchlistRef = doc(watchlistsCollection, watchlistId)
    const movieRef = doc(watchlistRef, `movies/${movieId}`)
    try {
      deleteDoc(movieRef)
    } catch (e) {
      console.error("Error deleting movie document: ", e)
    }
  }

  const deleteMoviesFromWatchlist = async ({
    movieIds,
    watchlistId,
  }: DeleteMoviesFromWatchlist) => {
    movieIds.forEach((TMDBId) => {
      deleteMovieFromWatchlist({ movieId: TMDBId, watchlistId })
    })
  }

  const getWatchlistData = async (watchlistId: string) => {
    const watchlistRef = doc(watchlistsCollection, watchlistId)
    try {
      const watchlistSnapshot = await getDoc(watchlistRef)
      if (watchlistSnapshot.exists()) {
        return watchlistSnapshot.data() as Watchlist
      } else {
        console.error("No such document!")
        return {} as Watchlist
      }
    } catch (e) {
      console.error("Error getting watchlist document: ", e)
      return {} as Watchlist
    }
  }

  const getWatchlistsData = async () => {
    try {
      const watchlistsSnapshot = await getDocs(watchlistsCollection)
      return watchlistsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as WatchlistsData
    } catch (e) {
      console.error("Error getting user's watchlist documents: ", e)
      return [] as WatchlistsData
    }
  }

  const getMovieIds = async (watchlistId: string) => {
    const watchlistRef = doc(watchlistsCollection, watchlistId)
    const moviesCollection = collection(watchlistRef, "movies")
    try {
      const moviesSnapshot = await getDocs(moviesCollection)
      return moviesSnapshot.docs.map(
        (doc) => doc.data().TMDBMovieID
      ) as string[]
    } catch (e) {
      console.error("Error getting movie documents: ", e)
      return []
    }
  }

  return (
    <WatchlistContext.Provider
      value={{
        createWatchlist,
        editWatchlist,
        deleteWatchlist,
        addMovieToWatchlist,
        deleteMovieFromWatchlist,
        deleteMoviesFromWatchlist,
        getWatchlistData,
        getWatchlistsData,
        getMovieIds,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  )
}

export const useWatchlist = (): WatchlistContextProps => {
  const context = useContext(WatchlistContext)
  if (context === null) {
    throw new Error("useWatchlist must be used within a WatchlistProvider")
  }
  return context
}
