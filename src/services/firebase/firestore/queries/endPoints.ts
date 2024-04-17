import {
  DocumentData,
  DocumentReference,
  getDoc,
  getDocs,
} from "firebase/firestore"
import {
  UserData,
  WatchedMovie,
  Watchlist,
  WatchlistMovie,
} from "../../../../types/firestore"
import {
  getUserDocRef,
  getWatchedMovieDocRef,
  getWatchedMoviesCollectionRef,
  getWatchlistDocRef,
  getWatchlistMovieDocRef,
  getWatchlistsCollectionRef,
  getWatchlistsMoviesCollectionRef,
} from "../storeReferences"

const getData = async (docRef: DocumentReference<DocumentData>) => {
  const doc = await getDoc(docRef)
  if (doc.exists()) {
    return doc.data()
  } else {
    throw new Error("Document does not exist")
  }
}

// QUERIES:
export const getUserData = async (userId: string) => {
  return getData(getUserDocRef(userId)) as Promise<UserData>
}

export const getWatchlists = async (userId: string) => {
  const watchlistsSnapshot = await getDocs(getWatchlistsCollectionRef(userId))
  return watchlistsSnapshot.docs.map((doc) => doc.data()) as Watchlist[]
}

export const getSingleWatchlist = async (
  userId: string,
  watchlistId: string
) => {
  return getData(getWatchlistDocRef(userId, watchlistId)) as Promise<Watchlist>
}

export const getWatchedMovies = async (userId: string) => {
  const watchedMoviesSnapshot = await getDocs(
    getWatchedMoviesCollectionRef(userId)
  )
  return watchedMoviesSnapshot.docs.map((doc) => doc.data()) as WatchedMovie[]
}

export const getSingleWatchedMovie = async (
  userId: string,
  movieId: string
) => {
  return getData(
    getWatchedMovieDocRef(userId, movieId)
  ) as Promise<WatchedMovie>
}

export const getWatchlistMovies = async (
  userId: string,
  watchlistId: string
) => {
  const watchlistMoviesSnapshot = await getDocs(
    getWatchlistsMoviesCollectionRef(userId, watchlistId)
  )
  return watchlistMoviesSnapshot.docs.map((doc) =>
    doc.data()
  ) as WatchlistMovie[]
}

export const getSingleWatchlistMovie = async (
  userId: string,
  watchlistId: string,
  movieId: string
) => {
  return getData(
    getWatchlistMovieDocRef(userId, watchlistId, movieId)
  ) as Promise<WatchlistMovie>
}
