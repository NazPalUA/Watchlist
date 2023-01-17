import React from "react"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import './SearchResultsPage.scss'

export default function SearchResultsPage(props) {
    return (
        <div className={`search-results-page ${props.className}`}>
            <h4 className="search-results-page__header">
                Search Results: movies by Tom Cruise
            </h4>
            <ul className="search-results-page__list">
                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

                <li className="search-results-page__item">
                    <Link to="/movie-page" className="search-results-page__link">
                        <MovieCard className="search-results-page__movie-card" />
                    </Link>
                </li>

            </ul>
        </div>
    )
}