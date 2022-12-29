import React from "react"
import greatIcon from "../images/great_icon.svg"
import normalIcon from "../images/normal_icon.svg"
import awfulIcon from "../images/awful_icon.svg"
import './MovieCard.scss'

export default function MovieCard(props) {

    return (
        <div className={`movie-card ${props.className}`}>
            <img 
                className="movie-card__poster"
                src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
                alt="movie poster"
            />

            <div className="movie-card__rating-wrapper">
                <img 
                    className="movie-card__smile"
                    src={greatIcon} 
                    alt="rating smile" 
                />
                <span className="movie-card__rating">
                    68
                    <span className="movie-card__max-rating">/100</span>
                </span>
            </div>

            <p className="movie-card__title">
                Top Gun: Maverick
            </p>

            <p className="movie-card__year">
                (2022)
            </p>
        </div>
    )
}