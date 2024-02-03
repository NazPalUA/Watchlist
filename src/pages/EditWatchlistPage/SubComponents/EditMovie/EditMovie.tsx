import posterNotFound from "../../../../assets/images/poster_not_found.png"
import { Movie, MovieDetails } from "../../../../services/tmdb"
import styles from "./EditMovie.module.scss"

type EditMovieProps = {
  movie: Movie | MovieDetails
  delateMovieId: (e: React.MouseEvent, movieId: string) => void
}

export default function EditMovie({ movie, delateMovieId }: EditMovieProps) {
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
      <button
        className={styles.removeBtn}
        onClick={(e) => delateMovieId(e, movie.id.toString())}
      >
        Remove
      </button>
    </li>
  )
}
