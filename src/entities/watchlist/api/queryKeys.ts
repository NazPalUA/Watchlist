export const queryKeys = {
  ALL_WATCHLISTS: ["watchlists"],
  WATCHLIST: (watchlistId: string) => ["watchlists", watchlistId],
  ALL_WATCHED_MOVIES: ["watchedMovies"],
  WATCHED_MOVIE: (movieId: string) => ["watchedMovies", movieId],
  ALL_WATCHLIST_MOVIES: (watchlistId: string) => [
    "watchlistMovies",
    watchlistId,
  ],
  WATCHLIST_MOVIE: (watchlistId: string, movieId: string) => [
    "watchlistMovies",
    watchlistId,
    movieId,
  ],
}
