import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import { HistoryContext } from "../context/HistoryContext"
import MovieCard from "../components/MovieCard"
import './HistoryPage.scss'

export default function HistoryPage(props) {

    const {historyIds} = useContext(HistoryContext)

    const [moviesData, setMoviesData] = useState([])
    
    const API_KEY = "e980138e09662908e00ccbeacd080b08"
    const BASE_URL = "https://api.themoviedb.org/3/movie"

    useEffect(()=>{ 
        const movieIds = historyIds
    
        async function fetchData() {
            try {
                const responses = await Promise.all(movieIds.map(movieId => fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`)))
                if (!responses.every(response => response.ok)) {
                    throw new Error('Some requests failed')
                }
                const data = await Promise.all(responses.map(response => response.json()))
                setMoviesData(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    },[historyIds])

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
                        path={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        year={movie.release_date.slice(0, 4)}
                        rating={Math.round(movie.vote_average*10)}
                    />
                </Link>
            </li>
        )
    })

    return (
        <div className={`history-page ${props.className}`}>
            <button className="history-page__clear-btn">Clear history</button>
            <ul className="history-page__list card-grid">
                {historyList}
            </ul>
        </div>
    )
}