import React, { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import greatIcon from "../images/great_icon.svg"
import normalIcon from "../images/normal_icon.svg"
import awfulIcon from "../images/awful_icon.svg"
import confusedIcon from "../images/confused_icon.png"
import posterNotFound from "../images/poster_not_found.png"
import './MovieCard.scss'

function MovieCard(props) {
    const {setIsModalActive, setMovieId} = useContext(ModalContext)

    return (
        <div className={`movie-card ${props.className}`}>
            {props.haveAddBtn && 
                <button className="movie-card__add-btn" 
                    onClick={e=>{
                        e.preventDefault()
                        e.stopPropagation()
                        setIsModalActive(true)
                        setMovieId(props.movieId)
                    }}
                >
                </button>
            }
            <img className="movie-card__poster"
                src={props.path ? props.path : MovieCard.defaultProps.path}
                alt="movie poster"
            />

            <div className="movie-card__rating-wrapper">
                <img className="movie-card__smile"
                    src={props.rating == 0 ? confusedIcon : props.rating > 80 ? greatIcon : props.rating > 35 ? normalIcon : awfulIcon } 
                    alt="rating smile" 
                />
                <span className="movie-card__rating">
                    {props.rating > 0 ? props.rating : "?"}
                    <span className="movie-card__max-rating">/100</span>
                </span>
            </div>

            <p className="movie-card__title">
                {props.title}
            </p>

            <p className="movie-card__year">
                ({props.year})
            </p>
        </div>
    )
}

MovieCard.defaultProps = {
    className: "",
    haveAddBtn: true,
    path: posterNotFound
}
    
export default MovieCard