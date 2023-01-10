import React from "react"
import { Link } from "react-router-dom"
import Welcome from "../components/Welcome"
import SearchBox from "../components/SearchBox"
import MovieCard from "../components/MovieCard"
import './HomePage.scss'

export default function HomePage(props) {
    return (
        <main className={`home ${props.className}`}>
            <Welcome className="home__welcome" />
            <SearchBox className="home__search-box" />
            <h4 className="home__popular-title">Popular movies right now</h4>
            <ul className="home__popular-list">
                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

                <li className="home__popular-item">
                    <Link to="/movie-page" className="home__link">
                        <MovieCard className="home__movie-card" />
                    </Link>
                </li>

            </ul>
        </main>
    )
}