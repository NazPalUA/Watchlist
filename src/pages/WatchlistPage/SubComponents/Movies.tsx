import { Link } from "react-router-dom"
import { MovieDetails } from "../../../shared/API/tmdb"
import Card from "../../../shared/UI/Card"
import formatRating from "../../../shared/utils/formatRating"
import formatYear from "../../../shared/utils/formatYear"

type MoviesPropTypes = { moviesData: MovieDetails[] }

export default function Movies({ moviesData }: MoviesPropTypes) {
  // Generate HTML for each movie in the watchlist
  const watchListMoviesHTML = moviesData.map((movie) => {
    return (
      <li className="watchlist-page__movie-item" key={movie.id}>
        <Link to={`/movie-page/${movie.id}`} className="watchlist-page__link">
          <Card className="watchlist-page__movie-card" variant="movie">
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
    <ul className="watchlist-page__movie-list card-grid">
      {watchListMoviesHTML}
    </ul>
  )
}
