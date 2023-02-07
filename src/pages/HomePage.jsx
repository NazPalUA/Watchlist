import React from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import Welcome from "../components/Welcome"
import SearchBox from "../components/SearchBox"
import MovieCard from "../components/MovieCard"
import './HomePage.scss'

export default function HomePage(props) {

    const popularList = []
    for (let i = 0; i<15; i++) {
        popularList.push(
            <li className="home-page__popular-item"
                key={nanoid()}
            >
                <Link to="/movie-page" className="home-page__link">
                    <MovieCard className="home-page__movie-card" setModalActive={props.setModalActive} />
                </Link>
            </li>
        )
    }

    return (
        <div className={`home-page ${props.className}`}>
            <Welcome className="home-page__welcome" />
            <SearchBox className="home-page__search-box" />
            <h4 className="home-page__popular-title">Popular movies right now</h4>
            <ul className="home-page__popular-list card-grid">
                {popularList}
            </ul>
        </div>
    )
}