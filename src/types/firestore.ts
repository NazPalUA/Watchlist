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

export type WatchlistMovie = {
  addedAt: Date
  tmdbId: string
}

export type Watchlist = {
  name: string
  description: string
  createdAt: Date
  movies: WatchlistMovie[]
}

export type WatchedMovie = {
  tmdbId: string
}

export type UserData = {
  name: string
  photoURL?: string
  watchlists: Watchlist[]
  watchedMovies: WatchedMovie[]
}
