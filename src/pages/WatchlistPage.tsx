import { useContext }  from "react"
import { Link, useParams } from "react-router-dom"
import { nanoid } from "nanoid"
import { useWatchlistsContext } from "../context/WatchlistsContext"
import useMoviesData from "../hooks/useMoviesData"
import Card from "../components/Card"
import formatRating from "../utils/formatRating"
import formatYear from "../utils/formatYear"
import { MovieAPIResponse } from "../types/MovieAPI"
import editIcon from "../images/edit_icon.svg"
import './WatchlistPage.scss'

type WatchlistPagePropTypes = {
    className?: string
}

function WatchlistPage({className}: WatchlistPagePropTypes) {
    // Get the watchlist ID from the URL parameter
    const {watchlistId} = useParams()

    // Get the watchlist data and the movie IDs in the watchlists from the context
    const {isExist, getWatchlistData, getMovieIds} = useWatchlistsContext() 

    const exist = isExist(watchlistId)
    if (!exist) return <h1>Watchlist not found!</h1>

    // Get the movie data for all the movies in the watchlist
    const movieIds = getMovieIds(watchlistId)
    const {moviesData} = useMoviesData(movieIds)

    // Calculate the average vote of the movies in the watchlist
    function getAverageVote(movies: MovieAPIResponse[]) {
        const moviesWithScoreData = movies.filter(movie => movie.vote_average > 0)
        const totalVotes = moviesWithScoreData.reduce((acc, movie) => acc + movie.vote_average, 0)
        return Math.round(totalVotes / moviesWithScoreData.length * 10)
    }
    const avgScore = moviesData ? getAverageVote(moviesData) : 0

    // Calculate the total unwatched runtime of the movies in the watchlist
    function getUnwatchedRuntime(movies: MovieAPIResponse[]) {return movies.reduce((acc, movie) => acc + movie.runtime, 0)}
    const unwatchedRuntime = moviesData ? getUnwatchedRuntime(moviesData) : 0

    // Generate HTML for each movie in the watchlist
    const watchListMoviesHTML = moviesData.map(movie=>{
        return (
            <li className="watchlist-page__movie-item"
                key={nanoid()}
            >
                <Link to={`/movie-page/${movie.id}`} className="watchlist-page__link">
                    <Card className="watchlist-page__movie-card"  variant="movie" >
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
        <div className={`watchlist-page ${className}`}>
                <div className="watchlist-page__header-container">
                    <h2 className="watchlist-page__header">
                        {getWatchlistData(watchlistId)?.name}
                    </h2>
                    <Link to={`edit`} className="watchlist-page__edit">
                        <img className="watchlist-page__edit-icon" 
                            src={editIcon} alt="edit icon" />
                    </Link>
                </div>
                <h5 className="watchlist-page__about-title">
                    About this watchlist
                </h5>
                <p className="watchlist-page__about">
                    {getWatchlistData(watchlistId)?.description}
                </p>
                <ul className="watchlist-page__boxes-container">
                    <li className="watchlist-page__box">
                        <strong className="watchlist-page__box-name">
                            ITEMS ON LIST
                        </strong>
                        <p className="watchlist-page__box-content">
                            {moviesData.length}
                        </p>
                    </li>
                    <li className="watchlist-page__box">
                        <strong className="watchlist-page__box-name">
                            UNWATCHED RUNTIME
                        </strong>
                        <p className="watchlist-page__box-content">
                            {Math.floor(unwatchedRuntime/60)}h {unwatchedRuntime%60}m
                        </p>
                    </li>
                    <li className="watchlist-page__box">
                        <strong className="watchlist-page__box-name">
                            AVERAGE SCORE
                        </strong>
                        <p className="watchlist-page__box-content">
                            {isNaN(avgScore) ? '0' : avgScore}
                        </p>
                    </li>
                </ul>
                <ul className="watchlist-page__movie-list card-grid">
                    {watchListMoviesHTML}
                </ul>
        </div>
    )
}

export default WatchlistPage