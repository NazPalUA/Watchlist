import React from "react"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import './HistoryPage.scss'

export default function HistoryPage(props) {
    return (
        <div className={`history ${props.className}`}>
            <button className="history__clear-btn">Clear history</button>
            <ul className="history__list">
                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

                <li className="history__item">
                    <Link to="/movie-page" className="history__link">
                        <MovieCard className="history__movie-card" />
                    </Link>
                </li>

            </ul>
        </div>
    )
}