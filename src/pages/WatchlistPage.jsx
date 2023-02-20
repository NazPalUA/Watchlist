import React, { useContext, useEffect, useState }  from "react"
import { Link, useParams } from "react-router-dom"
import { nanoid } from "nanoid"
import MovieCard from "../components/MovieCard"
import { WatchlistsContext } from "../context/WatchlistsContext"
import editIcon from "../images/edit_icon.svg"
import './WatchlistPage.scss'

export default function WatchlistPage(props) {
    const {watchlistId} = useParams()

    const {watchlistsArr, getActiveWatchlist, getMovieIds} = useContext(WatchlistsContext)

    const [moviesData, setMoviesData] = useState([])
    
    const API_KEY = "e980138e09662908e00ccbeacd080b08"
    const BASE_URL = "https://api.themoviedb.org/3/movie"

    useEffect(()=>{ 
        const movieIds = getMovieIds(watchlistId)
    
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
    },[watchlistId])

    const watchListMoviesHTML = moviesData.map(movie=>{
        return (
            <li className="watchlist-page__movie-item"
                key={nanoid()}
            >
                <Link to="/movie-page" className="watchlist-page__link">
                    <MovieCard 
                        className="watchlist-page__movie-card" 
                        addBtn={false}
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
        <div className={`watchlist-page ${props.className}`}>
            {watchlistsArr.length && <>
                <div className="watchlist-page__header-container">
                    <h2 className="watchlist-page__header">
                        {/* Movies by Tom Cruise */}
                        {getActiveWatchlist().name}
                    </h2>
                    <Link to={`/edit-watchlist-page/${watchlistId}`} className="watchlist-page__edit">
                        <img className="watchlist-page__edit-icon" 
                            src={editIcon} alt="edit icon" />
                    </Link>
                </div>
                <h5 className="watchlist-page__about-title">
                    About this watchlist
                </h5>
                <p className="watchlist-page__about">
                    {/* This list lorem ipsum dolor et blah blah blah */}
                    {getActiveWatchlist().description}
                </p>
                <ul className="watchlist-page__boxes-container">
                    <li className="watchlist-page__box">
                        <strong className="watchlist-page__box-name">
                            ITEMS ON LIST
                        </strong>
                        <p className="watchlist-page__box-content">
                            10
                        </p>
                    </li>
                    <li className="watchlist-page__box">
                        <strong className="watchlist-page__box-name">
                            UNWATCHED RUNTIME
                        </strong>
                        <p className="watchlist-page__box-content">
                            14h 30m
                        </p>
                    </li>
                    <li className="watchlist-page__box">
                        <strong className="watchlist-page__box-name">
                            AVERAGE SCORE
                        </strong>
                        <p className="watchlist-page__box-content">
                            73
                        </p>
                    </li>
                </ul>
                <ul className="watchlist-page__movie-list card-grid">
                    {watchListMoviesHTML}
                </ul>
            </>}
        </div>
    )
}