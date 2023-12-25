import { Link } from "react-router-dom"
import Card from "../../Card"
import formatRating from "../../../utils/formatRating"
import formatYear from "../../../utils/formatYear"
import { Result as Movie } from '../../../types/PopularOrSearchMoviesAPI'

type MoviesListProps = {
    moviesData: Movie[]
}

/**
 * MoviesList component for displaying a list of movies.
 * Each movie is presented as a card with relevant details.
 *
 * @param {MoviesListProps} props - Properties including the array of movies to be displayed.
 * @returns A list of movie cards.
 */

export default function MoviesList({ moviesData }: MoviesListProps) {

    const moviesListHTML = moviesData.map(movie => {
        return (
            <li className="infinite-list__item" key={movie.id}>
                <Link to={`/movie-page/${movie.id}`} className={`infinite-list__link`}>
                    <Card className={`infinite-list__card`} variant="movie" >
                        <Card.AddToPlaylistBtn movieId={movie.id}/>
                        <Card.Image variant="movie-poster">
                            {movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : undefined}
                        </Card.Image>
                        <Card.Rating>{formatRating(movie.vote_average)}</Card.Rating> 
                        <Card.Description variant="movie">{movie.title}</Card.Description>
                        <Card.Description variant="year">({formatYear(movie.release_date)})</Card.Description>
                    </Card>
                </Link>
            </li>
        )
    })

    return (
            <>
                {moviesListHTML}
            </>
    )
}