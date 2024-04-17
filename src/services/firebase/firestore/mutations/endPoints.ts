import {
  addDoc,
  deleteDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore"
import { Watchlist } from "../../../../types/firestore"
import { TWatchlistSchema } from "../../../../types/form-watchlist"
import {
  getUserDocRef,
  getWatchedMovieDocRef,
  getWatchlistDocRef,
  getWatchlistMovieDocRef,
  getWatchlistsCollectionRef,
} from "../storeReferences"

// MUTATIONS:

export const addUserData = async (
  userId: string,
  { name, photoURL }: { name: string; photoURL?: string }
) => {
  try {
    await setDoc(getUserDocRef(userId), {
      name,
      photoURL,
      createdAt: serverTimestamp(),
      lastModifiedAt: serverTimestamp(),
    })
  } catch (error) {
    console.error("Error adding user data: ", error)
    throw error
  }
}

export const editUserData = async (
  userId: string,
  { name, photoURL }: { name?: string; photoURL?: string }
) => {
  const update: { [key: string]: any } = { lastModifiedAt: serverTimestamp() }

  if (name !== undefined) {
    update.name = name
  }

  if (photoURL !== undefined) {
    update.photoURL = photoURL
  }

  try {
    await updateDoc(getUserDocRef(userId), update)
  } catch (error) {
    console.error("Error editing user data: ", error)
    throw error
  }
}

type WatchlistID = string
export const createWatchlist = async (
  userId: string,
  { name, description }: TWatchlistSchema
): Promise<WatchlistID> => {
  const newWatchlist: Omit<Watchlist, "id"> = {
    name,
    description,
    createdAt: serverTimestamp(),
    lastModifiedAt: serverTimestamp(),
  }
  try {
    const docRef = await addDoc(
      getWatchlistsCollectionRef(userId),
      newWatchlist
    )
    return docRef.id
  } catch (error) {
    console.error("Error creating watchlist: ", error)
    throw error
  }
}

export const editWatchlist = async (
  userId: string,
  watchlistId: string,
  { name, description }: TWatchlistSchema
) => {
  try {
    return await updateDoc(getWatchlistDocRef(userId, watchlistId), {
      name,
      description,
      lastModifiedAt: serverTimestamp(),
    })
  } catch (error) {
    console.error("Error editing watchlist: ", error)
    throw error
  }
}

// TODO: Implement deleting all Subcollections (Movies) when deleting a Watchlist
export const deleteWatchlist = async (userId: string, watchlistId: string) => {
  try {
    await deleteDoc(getWatchlistDocRef(userId, watchlistId))
  } catch (error) {
    console.error("Error deleting watchlist: ", error)
    throw error
  }
}

export const addMovieToWatchlist = async (
  userId: string,
  watchlistId: string,
  movieId: string
) => {
  const newMovie = {
    addedAt: serverTimestamp(),
    tmdbId: movieId,
  }
  try {
    await setDoc(
      getWatchlistMovieDocRef(userId, watchlistId, movieId),
      newMovie
    )
  } catch (error) {
    console.error("Error adding movie to watchlist: ", error)
    throw error
  }
}

export const removeMovieFromWatchlist = async (
  userId: string,
  watchlistId: string,
  movieId: string
) => {
  try {
    await deleteDoc(getWatchlistMovieDocRef(userId, watchlistId, movieId))
  } catch (error) {
    console.error("Error removing movie from watchlist: ", error)
    throw error
  }
}

export const addToWatched = async (userId: string, movieId: string) => {
  try {
    await setDoc(getWatchedMovieDocRef(userId, movieId), {
      tmdbId: movieId,
    })
  } catch (error) {
    console.error("Error adding movie to watched: ", error)
    throw error
  }
}

export const removeFromWatched = async (userId: string, movieId: string) => {
  try {
    await deleteDoc(getWatchedMovieDocRef(userId, movieId))
  } catch (error) {
    console.error("Error removing movie from watched: ", error)
    throw error
  }
}
