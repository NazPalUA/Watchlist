import { Link } from "react-router-dom"
import formatRating from "../../lib/utils/formatRating"
import formatYear from "../../lib/utils/formatYear"
import Card from "../Card"
import { CardsGridContainer } from "../CardsGridContainer"
import styles from "./MoviesList.module.scss"

type Movie = {
  vote_average: number
  poster_path?: string
  id: string | number
  title: string
  release_date: string
}

type MoviesListProps<T extends Movie> = {
  moviesData: T[]
  className?: string
}

export default function MoviesList<T extends Movie>({
  moviesData,
  className,
}: MoviesListProps<T>) {
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

  return (
    <CardsGridContainer className={className}>
      {moviesListHTML}
    </CardsGridContainer>
  )
}
