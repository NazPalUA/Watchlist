import { Link } from "react-router-dom"
import Card from "../../../components/Card"
import formatRating from "../../../utils/formatRating"
import formatYear from "../../../utils/formatYear"
import useRelatedData from "../hooks/useRelatedData"

type RelatedMoviesListPropTypes = {
  movieId: string
}
export default function RelatedMovies({ movieId }: RelatedMoviesListPropTypes) {
  const { relatedMovies } = useRelatedData(movieId)
  if (!relatedMovies) return <div>Error</div>
  const relatedDataArray = relatedMovies.map((movie) => {
    return (
      <li className="movie-page__list-item" key={movie.id}>
        <Link to={`/movie-page/${movie.id}`} className="movie-page__link">
          <Card className="movie-page__card" variant="movie">
            <Card.AddToPlaylistBtn movieId={movie.id} />
            <Card.Image variant="movie-poster">
              {movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : undefined}
            </Card.Image>
            <Card.Rating>{formatRating(movie.vote_average)}</Card.Rating>
            <Card.Description variant="movie">{movie.title}</Card.Description>
            <Card.Description variant="year">
              ({formatYear(movie.release_date)})
            </Card.Description>
          </Card>
        </Link>
      </li>
    )
  })

  return (
    <>
      <h5 className="movie-page__section-title movie-page__section-title_movies">
        Related Movies
      </h5>
      <ul className="movie-page__list card-grid">{relatedDataArray}</ul>
    </>
  )
}
