import React from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import MovieCard from "../components/MovieCard"
import './HistoryPage.scss'

export default function HistoryPage(props) {

    const historyList = []
    for (let i = 0; i<17; i++) {
        historyList.push(
            <li className="history-page__item"
                key={nanoid()}
            >
                <Link to="/movie-page" className="history-page__link">
                    <MovieCard 
                        className="history-page__movie-card" 
                        setModalActive={props.setModalActive} 
                        title={"Top Gun: Maverick"}
                        path={"https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"}
                        year={"2022"}
                        rating={68}
                    />
                </Link>
            </li>
        )
    }

    return (
        <div className={`history-page ${props.className}`}>
            <button className="history-page__clear-btn">Clear history</button>
            <ul className="history-page__list card-grid">
                {historyList}
            </ul>
        </div>
    )
}