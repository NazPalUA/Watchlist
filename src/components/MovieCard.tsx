import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import greatIcon from "../images/great_icon.svg"
import normalIcon from "../images/normal_icon.svg"
import awfulIcon from "../images/awful_icon.svg"
import confusedIcon from "../images/confused_icon.png"
import posterNotFound from "../images/poster_not_found.png"
import './MovieCard.scss'

type MovieCardPropTypes = {
    className?: string,
    haveAddBtn: boolean,
    movieId: string,
    path: string,
    rating: number,
    title: string,
    year: string
}

function MovieCard({className, haveAddBtn = true, movieId, path = posterNotFound, rating, title, year}: MovieCardPropTypes) {
    const {setIsModalActive, setMovieId} = useContext(ModalContext)

    return (
        <div className={`movie-card ${className}`}>
            {haveAddBtn && 
                <button className="movie-card__add-btn" 
                    onClick={e=>{
                        e.preventDefault()
                        e.stopPropagation()
                        setIsModalActive(true)
                        setMovieId(movieId)
                    }}
                >
                </button>
            }
            <img className="movie-card__poster"
                src={path ? path : posterNotFound}
                alt="movie poster"
            />

            <div className="movie-card__rating-wrapper">
                <img className="movie-card__smile"
                    src={rating == 0 ? confusedIcon : rating > 80 ? greatIcon : rating > 35 ? normalIcon : awfulIcon } 
                    alt="rating smile" 
                />
                <span className="movie-card__rating">
                    {rating > 0 ? rating : "?"}
                    <span className="movie-card__max-rating">/100</span>
                </span>
            </div>

            <p className="movie-card__title">
                {title}
            </p>

            <p className="movie-card__year">
                ({year})
            </p>
        </div>
    )
}
    
export default MovieCard