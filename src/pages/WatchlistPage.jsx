import React from "react"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import editIcon from "../images/edit_icon.svg"
import './WatchlistPage.scss'

export default function WatchlistPage(props) {
    return (
        <main className={`watchlist-page ${props.className}`}>
            <div className="watchlist-page__header-container">
                <h2 className="watchlist-page__header">
                    Movies by Tom Cruise
                </h2>
                <button className="watchlist-page__edit">
                    <img className="watchlist-page__edit-icon" 
                        src={editIcon} alt="edit icon" />
                </button>
            </div>
            <h5 className="watchlist-page__about-title">
                About this watchlist
            </h5>
            <p className="watchlist-page__about">
                This list lorem ipsum dolor et blah blah blah
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
            <ul className="watchlist-page__movie-list">
                <li className="watchlist-page__movie-item">
                    <Link to="/movie-page" className="watchlist-page__link">
                        <MovieCard className="watchlist-page__movie-card" />
                    </Link>
                </li>

                <li className="watchlist-page__movie-item">
                    <Link to="/movie-page" className="watchlist-page__link">
                        <MovieCard className="watchlist-page__movie-card" />
                    </Link>
                </li>

                <li className="watchlist-page__movie-item">
                    <Link to="/movie-page" className="watchlist-page__link">
                        <MovieCard className="watchlist-page__movie-card" />
                    </Link>
                </li>

                <li className="watchlist-page__movie-item">
                    <Link to="/movie-page" className="watchlist-page__link">
                        <MovieCard className="watchlist-page__movie-card" />
                    </Link>
                </li>

                <li className="watchlist-page__movie-item">
                    <Link to="/movie-page" className="watchlist-page__link">
                        <MovieCard className="watchlist-page__movie-card" />
                    </Link>
                </li>

                <li className="watchlist-page__movie-item">
                    <Link to="/movie-page" className="watchlist-page__link">
                        <MovieCard className="watchlist-page__movie-card" />
                    </Link>
                </li>

                <li className="watchlist-page__movie-item">
                    <Link to="/movie-page" className="watchlist-page__link">
                        <MovieCard className="watchlist-page__movie-card" />
                    </Link>
                </li>
            </ul>
        </main>
    )
}