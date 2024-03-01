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
import { ManageWatchlistData, Movie, Watchlist } from "./types"

const watchlistsCollection = (userId: string) =>
  collection(db, `users/${userId}/watchlists`)

const watchlistRef = (userId: string, watchlistId: string) =>
  doc(db, `users/${userId}/watchlists/${watchlistId}`)

const moviesCollection = (userId: string, watchlistId: string) =>
  collection(db, `users/${userId}/watchlists/${watchlistId}/movies`)

const movieRef = (userId: string, watchlistId: string, movieId: string) =>
  doc(db, `users/${userId}/watchlists/${watchlistId}/movies/${movieId}`)

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

export const getMoviesData = async (userId: string, watchlistId: string) => {
  return getDocs(moviesCollection(userId, watchlistId)).then(
    (moviesSnapshot) => {
      return moviesSnapshot.docs.map((doc) => doc.data()) as Movie[]
    }
  )
}

export const getMovieData = async (
  userId: string,
  watchlistId: string,
  movieId: string
) => {
  return getDoc(movieRef(userId, watchlistId, movieId)).then((doc) => {
    if (doc.exists()) {
      return doc.data() as Movie
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
  return setDoc(movieRef(userId, watchlistId, movieId), {
    createdAt: new Date(),
    id: movieId,
  })
}

export const removeMovieFromWatchlist = async (
  userId: string,
  watchlistId: string,
  movieId: string
) => {
  deleteDoc(movieRef(userId, watchlistId, movieId))
}
