/**
 * Firestore Structure:
 *
 * Users (Collection)
 *   - userId (Document)
 *     - name: string
 *     - photoURL: string
 *     |
 *     - WatchedMovies (Subcollection)
 *       - movieId (Document)
 *         - tmdbId: string
 *     |
 *     - Watchlists (Subcollection)
 *       - watchlistId (Document)
 *         - name: string
 *         - description: string
 *         - createdAt: Date
 *         |
 *         - Movies (Subcollection)
 *           - movieId (Document)
 *             - addedAt: Date
 *             - tmdbId: string
 */

import { FieldValue } from "firebase/firestore"

export type UserData = {
  name: string
  photoURL?: string
}
export type WatchlistMovie = {
  addedAt: FieldValue | Date
  tmdbId: string
}

export type Watchlist = {
  name: string
  description: string
  createdAt: FieldValue | Date
  lastModifiedAt: FieldValue | Date
  id: string
}

export type WatchedMovie = {
  tmdbId: string
}
