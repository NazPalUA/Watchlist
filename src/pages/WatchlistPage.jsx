import React, { useContext, useEffect, useState }  from "react"
import { Link, useParams } from "react-router-dom"
import { nanoid } from "nanoid"
import MovieCard from "../components/MovieCard"
import { WatchlistsContext } from "../context/WatchlistsContext"
import editIcon from "../images/edit_icon.svg"
import './WatchlistPage.scss'

export default function WatchlistPage(props) {
    const {watchlistId} = useParams()

    const {watchlistsArr, getWatchlistData, getMovieIds} = useContext(WatchlistsContext)

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

    function getAverageVote(movies) {
        const totalVotes = movies.reduce((acc, movie) => acc + movie.vote_average, 0);
        return Math.round(totalVotes / movies.length * 10);
    }
    const avgScore = moviesData ? getAverageVote(moviesData) : 0;

    function getUnwatchedRuntime(movies) {
        const totalTime = movies.reduce((acc, movie) => acc + movie.runtime, 0);
        return totalTime
    }
    const unwatchedRuntime = moviesData ? getUnwatchedRuntime(moviesData) : 0;

    const watchListMoviesHTML = moviesData.map(movie=>{
        return (
            <li className="watchlist-page__movie-item"
                key={nanoid()}
            >
                <Link to={`/movie-page/${movie.id}`} className="watchlist-page__link">
                    <MovieCard 
                        className="watchlist-page__movie-card" 
                        movieId={movie.id}
                        addBtn={false}
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
        <div className={`watchlist-page ${props.className}`}>
            {watchlistsArr.length && <>
                <div className="watchlist-page__header-container">
                    <h2 className="watchlist-page__header">
                        {/* Movies by Tom Cruise */}
                        {getWatchlistData(watchlistId).name}
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
                    {getWatchlistData(watchlistId).description}
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
            </>}
        </div>
    )
}