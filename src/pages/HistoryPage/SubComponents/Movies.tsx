import { Link } from "react-router-dom"
import Card from "../../../components/Card"
import { MovieDetails } from "../../../services/tmdb"
import formatRating from "../../../utils/formatRating"
import formatYear from "../../../utils/formatYear"

type MoviesPropTypes = { moviesData: MovieDetails[] }

export default function Movies({ moviesData }: MoviesPropTypes) {
  // Generate HTML for each movie in the watchlist
  const historyListHTML = moviesData.map((movie) => {
    return (
      <li className="watchlist-page__movie-item" key={movie.id}>
        <Link to={`/movie-page/${movie.id}`} className="watchlist-page__link">
          <Card className="watchlist-page__movie-card" variant="movie">
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

  return <ul className="history-page__list card-grid">{historyListHTML}</ul>
}
