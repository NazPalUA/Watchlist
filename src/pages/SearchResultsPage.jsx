import React from "react"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import './SearchResultsPage.scss'

export default function SearchResultsPage(props) {
    return (
        <main className={`search-results ${props.className}`}>
            <h4 className="search-results__header">
                Search Results: movies by Tom Cruise
            </h4>
            <ul className="search-results__list">
                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

                <li className="search-results__item">
                    <Link to="/movie-page" className="search-results__link">
                        <MovieCard className="search-results__movie-card" />
                    </Link>
                </li>

            </ul>
        </main>
    )
}