import React, { useContext, useEffect, useState }  from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import MovieCard from "../components/MovieCard"
import { WatchlistsContext } from "../context/WatchlistsContext"
import editIcon from "../images/edit_icon.svg"
import './WatchlistPage.scss'

export default function WatchlistPage(props) {

    const {watchlistsArr, getActiveWatchlist} = useContext(WatchlistsContext)
    // console.log(getActiveWatchlist())

    const watchList = []
    for (let i = 0; i<15; i++) {
        watchList.push(
            <li className="watchlist-page__movie-item"
                key={nanoid()}
            >
                <Link to="/movie-page" className="watchlist-page__link">
                    <MovieCard 
                        className="watchlist-page__movie-card" 
                        addBtn={false}
                        title={"Top Gun: Maverick"}
                        path={"https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"}
                        year={"2022"}
                        rating={68}
                    />
                </Link>
            </li>
        )
    }

    return (
        <div className={`watchlist-page ${props.className}`}>
            {watchlistsArr.length && <>
                <div className="watchlist-page__header-container">
                    <h2 className="watchlist-page__header">
                        {/* Movies by Tom Cruise */}
                        {getActiveWatchlist().name}
                    </h2>
                    <Link to="/edit-watchlist-page" className="watchlist-page__edit">
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
                    {watchList}
                </ul>
            </>}
        </div>
    )
}