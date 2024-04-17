import { collection, doc } from "firebase/firestore"
import { db } from "../firebase-config"

export function getUserDocRef(userId: string) {
  return doc(db, `users/${userId}`)
}

export function getWatchedMoviesCollectionRef(userId: string) {
  return collection(db, `users/${userId}/watchedMovies`)
}

export function getWatchedMovieDocRef(userId: string, movieId: string) {
  return doc(db, `users/${userId}/watchedMovies/${movieId}`)
}

export function getWatchlistsCollectionRef(userId: string) {
  return collection(db, `users/${userId}/watchlists`)
}

export function getWatchlistDocRef(userId: string, watchlistId: string) {
  return doc(db, `users/${userId}/watchlists/${watchlistId}`)
}

export function getWatchlistsMoviesCollectionRef(
  userId: string,
  watchlistId: string
) {
  return collection(db, `users/${userId}/watchlists/${watchlistId}/movies`)
}

export function getWatchlistMovieDocRef(
  userId: string,
  watchlistId: string,
  movieId: string
) {
  return doc(db, `users/${userId}/watchlists/${watchlistId}/movies/${movieId}`)
}
