import React, { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import greatIcon from "../images/great_icon.svg"
import normalIcon from "../images/normal_icon.svg"
import awfulIcon from "../images/awful_icon.svg"
import ribbon_icon from "../images/ribbon_icon.svg"
import './MovieCard.scss'

function MovieCard(props) {

    const {setIsModalActive, setMovieId} = useContext(ModalContext)

    return (
        <div className={`movie-card ${props.className}`}>
            {props.addBtn && 
                <button 
                    className="movie-card__add-btn" 
                    onClick={e=>{
                        e.preventDefault()
                        e.stopPropagation()
                        setIsModalActive(true)
                        setMovieId(props.movieId)
                    }}
                >
                </button>
            }
            <img 
                className="movie-card__poster"
                src={props.path}
                alt="movie poster"
            />

            <div className="movie-card__rating-wrapper">
                <img 
                    className="movie-card__smile"
                    src={props.rating > 80 ? greatIcon : props.rating > 35 ? normalIcon : awfulIcon } 
                    alt="rating smile" 
                />
                <span className="movie-card__rating">
                    {props.rating}
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
    addBtn: true
}
    
export default MovieCard