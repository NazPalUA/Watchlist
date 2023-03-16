import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { HistoryContext } from "../context/HistoryContext"
import useMoviesData from "../hooks/useMoviesData"
import MovieCard from "../components/MovieCard"
import './HistoryPage.scss'

function HistoryPage(props) {
    const {historyIds, clearHistory} = useContext(HistoryContext)
    const {moviesData} = useMoviesData(historyIds)

    const historyListHTML = moviesData.map(movie=>{
        return (
            <li className="watchlist-page__movie-item"
                key={movie.id}
            >
                <Link to={`/movie-page/${movie.id}`} className="watchlist-page__link">
                    <MovieCard 
                        className="watchlist-page__movie-card" 
                        movieId={movie.id}
                        title={movie.title}
                        path={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : null}
                        year={movie.release_date.slice(0, 4)}
                        rating={Math.round(movie.vote_average*10)}
                    />
                </Link>
            </li>
        )
    })
    

    return (
        <div className={`history-page ${props.className}`}>
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

HistoryPage.defaultProps = {
    className: ""
}

export default HistoryPage