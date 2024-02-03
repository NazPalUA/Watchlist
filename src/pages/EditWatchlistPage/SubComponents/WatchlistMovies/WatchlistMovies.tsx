import { Movie, MovieDetails } from "../../../../services/tmdb"
import EditMovie from "../EditMovie/EditMovie"
import styles from "./WatchlistMovies.module.scss"

type WatchlistMoviesProps = {
  moviesData: (Movie | MovieDetails)[]
  delateMovieId: (e: React.MouseEvent, movieId: string) => void
}

export default function WatchlistMovies({
  moviesData,
  delateMovieId,
}: WatchlistMoviesProps) {
  const moviesListHTML = moviesData.map((movie) => (
    <EditMovie delateMovieId={delateMovieId} movie={movie} />
  ))

  if (!moviesListHTML.length) {
    return <p>No movies found in this watchlist!</p>
  }

  return (
    <>
      <strong className={styles.title}>Movies</strong>
      <ul className={styles.list}>{moviesListHTML}</ul>
    </>
  )
}
