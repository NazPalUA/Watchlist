import React from "react"
import Welcome from "../components/Welcome"
import SearchBox from "../components/SearchBox"
import MovieCard from "../components/MovieCard"
import './Home.scss'

export default function Home() {
    return (
        <main className="home">
            <Welcome />
            <SearchBox />
            <h4 className="home__popular-title">Popular movies right now</h4>
            <ul className="home__popular-list">
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                <li className="home__popular-item"><MovieCard /></li>
                {/* <li className="home__popular-item"><MovieCard /></li> */}
            </ul>
        </main>
    )
}