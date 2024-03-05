import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore"
import { db } from "../firebase-config"
import { ManageWatchlistData, Watchlist } from "./types"

const watchlistsCollection = (userId: string) =>
  collection(db, `users/${userId}/watchlists`)

const watchlistRef = (userId: string, watchlistId: string) =>
  doc(db, `users/${userId}/watchlists/${watchlistId}`)

// QUERIES:
export const getWatchlistsData = async (userId: string) => {
  return getDocs(watchlistsCollection(userId)).then((watchlistsSnapshot) => {
    return watchlistsSnapshot.docs.map((doc) => doc.data()) as Watchlist[]
  })
}

export const getWatchlistData = async (userId: string, watchlistId: string) => {
  return getDoc(watchlistRef(userId, watchlistId)).then((doc) => {
    if (doc.exists()) {
      return doc.data() as Watchlist
    } else {
      return null
    }
  })
}

// MUTATIONS:
export const createWatchlist = async (
  userId: string,
  { name, description }: ManageWatchlistData
) => {
  const watchlistId = name.toLowerCase().replace(/ /g, "-")
  return setDoc(watchlistRef(userId, watchlistId), {
    name,
    description,
    createdAt: new Date(),
    id: watchlistId,
    movies: [],
  })
}

export const editWatchlist = async (
  userId: string,
  watchlistId: string,
  { name, description }: ManageWatchlistData
) => {
  return updateDoc(watchlistRef(userId, watchlistId), {
    name,
    description,
  })
}

export const deleteWatchlist = async (userId: string, watchlistId: string) => {
  await deleteDoc(watchlistRef(userId, watchlistId))
}

export const addMovieToWatchlist = async (
  userId: string,
  watchlistId: string,
  movieId: string
) => {
  const watchlistSnapshot = await getDoc(watchlistRef(userId, watchlistId))
  const watchlistData = watchlistSnapshot.data() as Watchlist
  const updatedMovies = [
    ...watchlistData.movies.filter((movie) => movie.id !== movieId),
    { createdAt: new Date(), id: movieId },
  ]

  return updateDoc(watchlistRef(userId, watchlistId), {
    movies: updatedMovies,
  })
}

export const removeMovieFromWatchlist = async (
  userId: string,
  watchlistId: string,
  movieId: string
) => {
  const watchlistSnapshot = await getDoc(watchlistRef(userId, watchlistId))
  const watchlistData = watchlistSnapshot.data() as Watchlist
  const updatedMovies = watchlistData.movies.filter(
    (movie) => movie.id !== movieId
  )

  return updateDoc(watchlistRef(userId, watchlistId), {
    movies: updatedMovies,
  })
}
