import React from "react"
import MovieCard from "../components/MovieCard"
import './HistoryPage.scss'

export default function HistoryPage(props) {
    return (
        <div className={`history ${props.className}`}>
            <button className="history__clear-btn">Clear history</button>
            <ul className="history__list">
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
                <li className="history__item"><MovieCard className="history__movie-card" /></li>
            </ul>
        </div>
    )
}