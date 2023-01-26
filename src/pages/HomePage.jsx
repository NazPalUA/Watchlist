import React from "react"
import { Link } from "react-router-dom"
import Welcome from "../components/Welcome"
import SearchBox from "../components/SearchBox"
import MovieCard from "../components/MovieCard"
import './HomePage.scss'

export default function HomePage(props) {
    return (
        <div className={`home-page ${props.className}`}>
            <Welcome className="home-page__welcome" />
            <SearchBox className="home-page__search-box" />
            <h4 className="home-page__popular-title">Popular movies right now</h4>
            <ul className="home-page__popular-list card-grid">
                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

                <li className="home-page__popular-item">
                    <Link to="/movie-page" className="home-page__link">
                        <MovieCard className="home-page__movie-card" />
                    </Link>
                </li>

            </ul>
        </div>
    )
}