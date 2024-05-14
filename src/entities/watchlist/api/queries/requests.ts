import { getDocs } from "firebase/firestore"
import { getDocData } from "../../../../shared/API/firestore/getDocData"
import {
  watchedMovieDocRef,
  watchedMoviesCollectionRef,
  watchlistDocRef,
  watchlistMovieDocRef,
  watchlistsCollectionRef,
  watchlistsMoviesCollectionRef,
} from "../../../../shared/API/firestore/storeReferences"
import { WatchedMovie, Watchlist, WatchlistMovie } from "../../model/types"

// QUERIES:

export const getWatchlists = async (userId: string) => {
  const watchlistsSnapshot = await getDocs(watchlistsCollectionRef(userId))
  return watchlistsSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Watchlist[]
}

export const getSingleWatchlist = async (
  userId: string,
  watchlistId: string
) => {
  return getDocData(watchlistDocRef(userId, watchlistId)) as Promise<Watchlist>
}

export const getWatchedMovies = async (userId: string) => {
  const watchedMoviesSnapshot = await getDocs(
    watchedMoviesCollectionRef(userId)
  )
  return watchedMoviesSnapshot.docs.map((doc) => doc.data()) as WatchedMovie[]
}

export const getSingleWatchedMovie = async (
  userId: string,
  movieId: string
) => {
  return getDocData(
    watchedMovieDocRef(userId, movieId)
  ) as Promise<WatchedMovie>
}

export const getWatchlistMovies = async (
  userId: string,
  watchlistId: string
) => {
  const watchlistMoviesSnapshot = await getDocs(
    watchlistsMoviesCollectionRef(userId, watchlistId)
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
  return getDocData(
    watchlistMovieDocRef(userId, watchlistId, movieId)
  ) as Promise<WatchlistMovie>
}
