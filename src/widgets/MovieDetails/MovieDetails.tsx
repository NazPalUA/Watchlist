import { MovieDetails as MovieDetailsType } from "../../shared/api/tmdb"
import { useModalContext } from "../../shared/context/ModalContext"
import { Button } from "../../shared/ui/Button/Button"
import styles from "./MovieDetails.module.scss"
import posterNotFound from "/images/poster_not_found.png"

type MovieDetailsPropTypes = {
  movieData: MovieDetailsType
}

export default function MovieDetails({ movieData }: MovieDetailsPropTypes) {
  // useContext to get state and functions from context
  const { setIsModalActive, setMovieId } = useModalContext()

  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__mainPoster}
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/original${movieData.poster_path}`
            : posterNotFound
        }
        alt="movie poster"
      />
      <div className={styles.movie__topRightContainer}>
        <h3 className={styles.movie__title}>
          {movieData.original_title}{" "}
          <span className={styles.movie__releaseYear}>
            ({movieData.release_date.toString().slice(0, 4)})
          </span>
        </h3>
        <p className={styles.movie__genre}>
          {movieData.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className={styles.movie__duration}>
          {Math.floor(movieData.runtime / 60)}h {movieData.runtime % 60}m
        </p>
        <h5 className={styles.movie__overviewTitle}>Overview</h5>
        <p className={styles.movie__overview}>{movieData.overview}</p>
        <div className={styles.movie__scoreBtnContainer}>
          <div className={styles.movie__scoreContainer}>
            <strong className={styles.movie__scoreHeader}>Score</strong>
            <div className={styles.movie__score}>
              {Math.round(movieData.vote_average * 10)}
            </div>
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsModalActive(true)
              setMovieId(movieData.id.toString())
            }}
          >
            Add to Watchlist
          </Button>
        </div>
      </div>
    </div>
  )
}
