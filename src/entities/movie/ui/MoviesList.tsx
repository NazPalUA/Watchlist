import { Link } from "react-router-dom"
import Card from "../../../shared/UI_ref/Card"
import { CardsGridContainer } from "../../../shared/UI_ref/CardsGridContainer"
import formatRating from "../lib/formatRating"
import formatYear from "../lib/formatYear"
import { MovieCard } from "../model/MovieCard"

type MoviesListProps<T extends MovieCard> = {
  moviesData: T[]
  showAddToPlaylistBtn?: boolean
  className?: string
}

export function MoviesList<T extends MovieCard>({
  moviesData,
  showAddToPlaylistBtn = true,
  className = "",
}: MoviesListProps<T>) {
  return (
    <CardsGridContainer className={className}>
      {moviesData.map((movie) => (
        <li style={{ listStyle: "none" }} key={movie.id}>
          <Link to={`/movie-page/${movie.id}`}>
            <Card variant="movie">
              {showAddToPlaylistBtn && (
                <Card.AddToPlaylistBtn movieId={movie.id} />
              )}
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
      ))}
    </CardsGridContainer>
  )
}
