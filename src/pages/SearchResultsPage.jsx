import React from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import MovieCard from "../components/MovieCard"
import './SearchResultsPage.scss'

export default function SearchResultsPage(props) {

    const searchList = []
    for (let i = 0; i<15; i++) {
        searchList.push(
            <li className="search-results-page__item"
                key={nanoid()}
            >
                <Link to="/movie-page" className="search-results-page__link">
                    <MovieCard className="search-results-page__movie-card" setModalActive={props.setModalActive} />
                </Link>
            </li>
        )
    }

    return (
        <div className={`search-results-page ${props.className}`}>
            <h4 className="search-results-page__header">
                Search Results: movies by Tom Cruise
            </h4>
            <ul className="search-results-page__list card-grid">
                {searchList}
            </ul>
        </div>
    )
}