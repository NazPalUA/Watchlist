import { useRemoveMovieFromWatchlistMutation } from "../../../../entities/watchlist"
import type { Movie, MovieDetails } from "../../../../shared/api/tmdb"
import styles from "./EditMovie.module.scss"
import posterNotFound from "/images/poster_not_found.png"

type EditMovieProps = {
  movie: Movie | MovieDetails
  watchlistId: string
}

export default function EditMovie({ movie, watchlistId }: EditMovieProps) {
  const { mutate: deleteMovieFromWatchlist } =
    useRemoveMovieFromWatchlistMutation(watchlistId, movie.id.toString())

  function delateMovie(event: React.MouseEvent) {
    event.preventDefault()
    deleteMovieFromWatchlist()
  }

  return (
    <li className={styles.item} key={movie.id}>
      <img
        className={styles.poster}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : posterNotFound
        }
        alt="movie poster"
      />
      <p>
        {movie.title}{" "}
        <span className={styles.movieYear}>
          ({movie.release_date.toString().slice(0, 4)})
        </span>
      </p>
      <button className={styles.removeBtn} onClick={(e) => delateMovie(e)}>
        Remove
      </button>
    </li>
  )
}
