import { Link } from "react-router-dom"
import {
  Movie,
  MovieDetails,
  Recommendation,
} from "../../shared/API/tmdb/types"
import Card from "../../shared/ui/Card"
import formatRating from "../../shared/utils/formatRating"
import formatYear from "../../shared/utils/formatYear"
import styles from "./MoviesList.module.scss"

type MoviesListProps = {
  moviesData: (Movie | MovieDetails | Recommendation)[]
  className?: string
}

export default function MoviesList({ moviesData, className }: MoviesListProps) {
  const moviesListHTML = moviesData.map((movie) => {
    return (
      <li className={`${styles.item}`} key={movie.id}>
        <Link to={`/movie-page/${movie.id}`}>
          <Card variant="movie">
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

  return <ul className={`${className} card-grid`}>{moviesListHTML}</ul>
}
