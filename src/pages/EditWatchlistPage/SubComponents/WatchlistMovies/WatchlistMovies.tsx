import { useGetWatchlistDataQuery } from "../../../../services/firebase/firestore/queries"
import { useMoviesDetails } from "../../../../services/tmdb"
import EditMovie from "../EditMovie/EditMovie"
import styles from "./WatchlistMovies.module.scss"

type WatchlistMoviesProps = {
  watchlistId: string
}

export default function WatchlistMovies({ watchlistId }: WatchlistMoviesProps) {
  const { data: watchlistData } = useGetWatchlistDataQuery(watchlistId)
  const userMovies = watchlistData?.movies
  const movieIds = userMovies?.map((movie) => movie.id) || []

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
