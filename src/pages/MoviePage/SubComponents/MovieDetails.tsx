import posterNotFound from "../../../assets/images/poster_not_found.png"
import { useModalContext } from "../../../context/ModalContext"
import { useMovieDetails } from "../../../services/tmdb"

type MovieDetailsPropTypes = {
  movieId: string
}

export default function MovieDetails({ movieId }: MovieDetailsPropTypes) {
  // useContext to get state and functions from context
  const { setIsModalActive, setMovieId } = useModalContext()
  const {
    isLoading: isMovieDataLoading,
    error: movieDataError,
    data: movieData,
  } = useMovieDetails(movieId)

  if (isMovieDataLoading) return <div>Loading...</div>

  if (movieDataError) return <div>Error</div>

  if (!movieData) return <div>Error</div>

  return (
    <div className="movie-page__top-container">
      <img
        className="movie-page__main-poster"
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/original${movieData.poster_path}`
            : posterNotFound
        }
        alt="movie poster"
      />
      <div className="movie-page__top-right-container">
        <h3 className="movie-page__title">
          {movieData.original_title}{" "}
          <span className="movie-page__release-year">
            ({movieData.release_date.toString().slice(0, 4)})
          </span>
        </h3>
        <p className="movie-page__genre">
          {movieData.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="movie-page__duration">
          {Math.floor(movieData.runtime / 60)}h {movieData.runtime % 60}m
        </p>
        <h5 className="movie-page__overview-title">Overview</h5>
        <p className="movie-page__overview">{movieData.overview}</p>
        <div className="movie-page__score-btn-container">
          <div className="movie-page__score-container">
            <strong className="movie-page__score-header">Score</strong>
            <div className="movie-page__score">
              {Math.round(movieData.vote_average * 10)}
            </div>
          </div>
          <button
            className="movie-page__btn"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsModalActive(true)
              setMovieId(movieData.id.toString())
            }}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  )
}
