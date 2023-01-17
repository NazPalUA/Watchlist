import React from "react"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import './HistoryPage.scss'

export default function HistoryPage(props) {
    return (
        <div className={`history-page ${props.className}`}>
            <button className="history-page__clear-btn">Clear history</button>
            <ul className="history-page__list">
                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

                <li className="history-page__item">
                    <Link to="/movie-page" className="history-page__link">
                        <MovieCard className="history-page__movie-card" />
                    </Link>
                </li>

            </ul>
        </div>
    )
}