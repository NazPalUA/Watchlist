import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import { HistoryContext } from "../context/HistoryContext"
import MovieCard from "../components/MovieCard"
import useMoviesData from "../hooks/useMoviesData"
import './HistoryPage.scss'

export default function HistoryPage(props) {

    const {historyIds, clearHistory} = useContext(HistoryContext)
    
    const API_KEY = "e980138e09662908e00ccbeacd080b08"
    const moviesData = useMoviesData(historyIds, API_KEY);

    const historyList = moviesData.map(movie=>{
        return (
            <li className="watchlist-page__movie-item"
                key={nanoid()}
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
                {historyList}
            </ul>
        </div>
    )
}