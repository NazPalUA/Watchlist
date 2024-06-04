import { Link } from "react-router-dom"
import formatRating from "../../../../shared/lib/utils/formatRating"
import formatYear from "../../../../shared/lib/utils/formatYear"
import Card from "../../../../shared/ui/Card"
import { CardsGridContainer } from "../../../../shared/ui/CardsGridContainer"
import styles from "./WatchListMovies.module.scss"

type Movie = {
  vote_average: number
  poster_path?: string
  id: string | number
  title: string
  release_date: string
}

type WatchListMoviesPropTypes<T extends Movie> = { moviesData: T[] }

export default function WatchListMovies<T extends Movie>({
  moviesData,
}: WatchListMoviesPropTypes<T>) {
  // Generate HTML for each movie in the watchlist
  const watchListMoviesHTML = moviesData.map((movie) => {
    return (
      <li className={styles.movie} key={movie.id}>
        <Link to={`/movie-page/${movie.id}`}>
          <Card variant="movie">
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

  return <CardsGridContainer>{watchListMoviesHTML}</CardsGridContainer>
}
