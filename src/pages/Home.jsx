import React from "react"
import Welcome from "../components/Welcome"
import SearchBox from "../components/SearchBox"
import MovieCard from "../components/MovieCard"
import './Home.scss'

export default function Home(props) {
    return (
        <main className={`home ${props.className}`}>
            <Welcome className="home__welcome" />
            <SearchBox className="home__search-box" />
            <h4 className="home__popular-title">Popular movies right now</h4>
            <ul className="home__popular-list">
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                <li className="home__popular-item"><MovieCard className="home__movie-card" /></li>
                {/* <li className="home__popular-item"><MovieCard /></li> */}
            </ul>
        </main>
    )
}