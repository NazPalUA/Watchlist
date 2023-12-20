import { useContext } from "react"
import classnames from "classnames"
import { ModalContext, ModalContextType } from "../../context/ModalContext"
import posterNotFound from "../../images/poster_not_found.png"
import './Card.scss'



export type CardProps = {
    children: React.ReactNode,
    variant: "movie" | "actor",
    imgSrc: string | undefined,
    movieId: string | undefined,
    className?: string
    haveAddBtn?: boolean,
}

export default function Card({ children, variant, imgSrc=posterNotFound, movieId, className, haveAddBtn  }: CardProps) {

    const allClasses = classnames(`${variant}-card`, className)

    const {setIsModalActive, setMovieId} = useContext(ModalContext) as ModalContextType

    return (
        <div className={allClasses}>
            {haveAddBtn && 
                <button className="movie-card__add-btn" 
                    onClick={e=>{
                        e.preventDefault()
                        e.stopPropagation()
                        setIsModalActive(true)
                        setMovieId(movieId ? movieId: "")
                    }}
                >
                </button>
            }
            <img className={variant==="movie" ? "movie-card__poster" : "actor-card__photo"} 
                src={imgSrc} alt={variant==="movie" ? "movie poster" : "actor photo"} />
            {children}
        </div>
    )
}
