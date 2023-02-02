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
                    <MovieCard className="history-page__movie-card" />
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