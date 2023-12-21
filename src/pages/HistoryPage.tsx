import { useContext } from "react"
import { Link } from "react-router-dom"
import { HistoryContext, HistoryContextType } from "../context/HistoryContext"
import useMoviesData from "../hooks/useMoviesData"
import Card from "../components/Card/index"
import './HistoryPage.scss'

type HistoryPagePropTypes = {
    className?: string
}


function HistoryPage({className}: HistoryPagePropTypes) {
    const {historyIds, clearHistory} = useContext(HistoryContext) as HistoryContextType
    const {moviesData} = useMoviesData(historyIds)

    const historyListHTML = moviesData.map(movie=>{
        return (
            <li className="watchlist-page__movie-item"
                key={movie.id}
            >
                <Link to={`/movie-page/${movie.id}`} className="watchlist-page__link">
                    <Card className="watchlist-page__movie-card" variant="movie" >
                        <Card.AddToPlaylistBtn movieId={movie.id}/>
                        <Card.Image variant="movie-poster">
                            {movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : undefined}
                        </Card.Image>
                        <Card.Rating>{Math.round(movie.vote_average*10)}</Card.Rating> 
                        <Card.Description variant="movie">{movie.title}</Card.Description>
                        <Card.Description variant="year">({movie.release_date.toString().slice(0, 4)})</Card.Description>
                    </Card>
                </Link>
            </li>
        )
    })
    

    return (
        <div className={`history-page ${className}`}>
            <button 
                className="history-page__clear-btn"
                onClick={clearHistory}
            >
                Clear history
            </button>
            <ul className="history-page__list card-grid">
                {historyListHTML}
            </ul>
        </div>
    )
}

export default HistoryPage