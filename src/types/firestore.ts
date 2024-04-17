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

type WatchlistMovie = {
  addedAt: Date
  tmdbId: string
}

type Watchlist = {
  name: string
  description: string
  createdAt: Date
  id: string
  movies: WatchlistMovie[]
}

type WatchedMovie = {
  tmdbId: string
}

type User = {
  name: string
  photoURL?: string
  watchlists: Watchlist[]
  watchedMovies: WatchedMovie[]
}
