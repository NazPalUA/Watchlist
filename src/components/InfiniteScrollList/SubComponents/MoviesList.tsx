import { Link } from "react-router-dom"
import Card from "../../Card/index"
import { Result as Movie } from '../../../types/PopularOrSearchMoviesAPI';

type MoviesListProps = {
    moviesData: Movie[];
}

export default function MoviesList({ moviesData }: MoviesListProps) {

    const moviesListHTML = moviesData.map(movie => {
        return (
            <li className="infinite-list__item"
                key={movie.id}
            >
                <Link to={`/movie-page/${movie.id}`} className={`infinite-list__link`}>
                    <Card className={`infinite-list__card`} variant="movie" >
                        <Card.AddToPlaylistBtn movieId={movie.id}/>
                        <Card.Image variant="movie-poster">
                            {movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : undefined}
                        </Card.Image>
                        <Card.Rating>{Math.round(movie.vote_average*10)}</Card.Rating> 
                        <Card.Description variant="movie">{movie.title}</Card.Description>
                        <Card.Description variant="year">({movie.release_date?.toString().slice(0, 4)})</Card.Description>
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