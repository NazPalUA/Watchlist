import { useGetWatchlistMoviesQuery } from "../../../../entities/watchlist/api/queries/hooks"
import { useMoviesDetails } from "../../../../shared/api/tmdb"
import EditMovie from "../EditMovie/EditMovie"
import styles from "./WatchlistMovies.module.scss"

type WatchlistMoviesProps = {
  watchlistId: string
}

export function WatchlistMovies({ watchlistId }: WatchlistMoviesProps) {
  const { data: userMovies } = useGetWatchlistMoviesQuery(watchlistId)
  const movieIds = userMovies?.map((movie) => movie.tmdbId) || []

  // Get the copy of current movieIds and their data using the custom hook
  const { data: moviesData } = useMoviesDetails(movieIds)

  const moviesListHTML = moviesData?.map((movie) => (
    <EditMovie movie={movie} watchlistId={watchlistId} />
  ))

  if (!moviesListHTML) {
    return <p>No movies found in this watchlist!</p>
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Movies</h4>
      <ul className={styles.list}>{moviesListHTML}</ul>
    </div>
  )
}
