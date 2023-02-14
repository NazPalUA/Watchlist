import React from "react";
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import MovieCard from "../components/MovieCard"
import ActorCard from "../components/ActorCard"
import './MoviePage.scss'

export default function MoviePage(props) {

    const castList = []
    for (let i = 0; i<8; i++) {
        castList.push(
            <li className="movie-page__list-item"
                key={nanoid()}
            >
                <ActorCard className="movie-page__card"/>
            </li>
        )
    }

    const relatedList = []
    for (let i = 0; i<10; i++) {
        relatedList.push(
            <li className="movie-page__list-item"
                key={nanoid()}
            >
                <Link to="/movie-page" className="movie-page__link">
                    <MovieCard 
                        className="movie-page__card" 
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
        <div className={`movie-page ${props.className}`}>
            <div className="movie-page__top-container">
                <img className="movie-page__main-poster" 
                    src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSaQBJTZNz49zecP0qdR-4dFjjU1j0ji7OLq0zuIRza0I717XQ9pJl0RRgUn-SUvAGq"alt="movie poster" />
                <div className="movie-page__top-right-container">
                    <h3 className="movie-page__title">
                        Top Gun Maverick <span className="movie-page__release-year">(2022)</span>
                    </h3>
                    <p className="movie-page__genre">
                        Action, Drama
                    </p>
                    <p className="movie-page__duration">
                        2h 11m
                    </p>
                    <h5 className="movie-page__overview-title">
                        Overview
                    </h5>
                    <p className="movie-page__overview">
                        After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.
                    </p>
                    <div className="movie-page__score-btn-container">
                        <div className="movie-page__score-container">
                            <strong className="movie-page__score-header">
                                Score
                            </strong>
                            <div className="movie-page__score">
                                83
                            </div>
                        </div>
                        <button className="movie-page__btn">
                            Add to Watchlist
                        </button>
                    </div>                    
                </div>
            </div>
            <h5 className="movie-page__section-title">
                Cast
            </h5>
            <ul className="movie-page__list card-grid">
                {castList}
            </ul>
            <h5 className="movie-page__section-title movie-page__section-title_movies">
                Related Movies
            </h5>
            <ul className="movie-page__list card-grid">
                {relatedList}
            </ul>
        </div>
    )
}