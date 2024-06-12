import { collection, doc } from "firebase/firestore"
import { db } from "../firebase-config"

export function userDocRef(userId: string) {
  return doc(db, `users/${userId}`)
}

export function watchedMoviesCollectionRef(userId: string) {
  return collection(db, `users/${userId}/watchedMovies`)
}

export function watchedMovieDocRef(userId: string, movieId: string) {
  return doc(db, `users/${userId}/watchedMovies/${movieId}`)
}

export function watchlistsCollectionRef(userId: string) {
  return collection(db, `users/${userId}/watchlists`)
}

export function watchlistDocRef(userId: string, watchlistId: string) {
  return doc(db, `users/${userId}/watchlists/${watchlistId}`)
}

export function watchlistsMoviesCollectionRef(
  userId: string,
  watchlistId: string
) {
  return collection(db, `users/${userId}/watchlists/${watchlistId}/movies`)
}

export function watchlistMovieDocRef(
  userId: string,
  watchlistId: string,
  movieId: string
) {
  return doc(db, `users/${userId}/watchlists/${watchlistId}/movies/${movieId}`)
}
