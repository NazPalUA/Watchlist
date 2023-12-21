import { useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { nanoid } from "nanoid"
import { ModalContext, ModalContextType } from "../context/ModalContext"
import { HistoryContext, HistoryContextType } from "../context/HistoryContext"
import useRelatedData from "../hooks/useRelatedData"
import useFetch from "../hooks/useFetch"
import Card from "../components/Card/index"
import { GetMovieDataAPIResponse } from "../types/GetMovieData"
import { GetCastDataAPIResponse } from "../types/GetCastDataAPI"
import posterNotFound from "../images/poster_not_found.png"
import './MoviePage.scss'


type MoviePagePropTypes = {
    className?: string
}

function MoviePage({ className }: MoviePagePropTypes) {
    // useContext to get state and functions from context
    const { setIsModalActive, setMovieId } = useContext(ModalContext) as ModalContextType
    const { addToHistory } = useContext(HistoryContext) as HistoryContextType

    // useParams hook to get the movieId from the URL parameter
    const { movieId } = useParams()

    const BASE_URL = "https://api.themoviedb.org/3/movie"

    // useFetch and useRelatedData custom hook to fetch movieData, relatedData and castData
    const { data: movieData } = useFetch<GetMovieDataAPIResponse | null>(`${BASE_URL}/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`)
    const { relatedData } = useRelatedData(movieId || "")
    const { data: castData } = useFetch<GetCastDataAPIResponse | null>(`${BASE_URL}/${movieId}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`)

    // useEffect hook to add current movieId to history array in HistoryContext
    useEffect(() => addToHistory(movieId), [movieId])

    // create castListHTML and relatedList elements based on fetched data
    const castListHTML = !castData ? [] : castData.cast.slice(0, 12).map(person => {
        return (
            <li className="movie-page__list-item"
                key={nanoid()}
            >
                <Card className="movie-page__card" variant="actor">
                    <Card.Image variant="actor-photo">{person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : undefined}</Card.Image>
                    <Card.Description variant="actor">{person.name}</Card.Description>
                    <Card.Description variant="character">{person.character}</Card.Description>
                </Card>
            </li>
        )
    })

    const relatedList = !relatedData ? [] : relatedData.map(movie => {
        return (
            <li className="movie-page__list-item"
                key={nanoid()}
            >
                <Link to={`/movie-page/${movie.id}`} className="movie-page__link">
                    <Card className="movie-page__card" variant="movie" >
                        <Card.AddToPlaylistBtn movieId={movie.id}/>
                        <Card.Image variant="movie-poster">
                            {movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : undefined}
                        </Card.Image>
                        <Card.Rating>{Math.round(movie.vote_average*10)}</Card.Rating> 
                        <Card.Description variant="movie">{movie.title}</Card.Description>
                        <Card.Description variant="year">({movie.release_date.toString().slice(0, 4)})</Card.Description>
                    </Card>
                </Link>
            </li>
        )
    })

    if (!movieData) return <div className={`movie-page ${className}`}></div>

    return (
        <div className={`movie-page ${className}`}>
            <div className="movie-page__top-container">
                <img className="movie-page__main-poster"
                    src={movieData.poster_path ? `https://image.tmdb.org/t/p/original${movieData.poster_path}` : posterNotFound}
                    alt="movie poster"
                />
                <div className="movie-page__top-right-container">
                    <h3 className="movie-page__title">
                        {movieData.original_title} <span className="movie-page__release-year">({movieData.release_date.toString().slice(0, 4)})</span>

                    </h3>
                    <p className="movie-page__genre">
                        {movieData.genres.map(genre => genre.name).join(', ')}
                    </p>
                    <p className="movie-page__duration">
                        {Math.floor(movieData.runtime / 60)}h {movieData.runtime % 60}m
                    </p>
                    <h5 className="movie-page__overview-title">
                        Overview
                    </h5>
                    <p className="movie-page__overview">
                        {movieData.overview}
                    </p>
                    <div className="movie-page__score-btn-container">
                        <div className="movie-page__score-container">
                            <strong className="movie-page__score-header">
                                Score
                            </strong>
                            <div className="movie-page__score">
                                {Math.round(movieData.vote_average * 10)}
                            </div>
                        </div>
                        <button
                            className="movie-page__btn"
                            onClick={e => {
                                e.preventDefault()
                                e.stopPropagation()
                                setIsModalActive(true)
                                setMovieId(movieId ? movieId: "")
                            }}
                        >
                            Add to Watchlist
                        </button>
                    </div>
                </div>
            </div>
            <h5 className="movie-page__section-title">
                Cast
            </h5>
            <ul className="movie-page__list card-grid">
                {castListHTML}
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

MoviePage.defaultProps = {
    className: ""
}

export default MoviePage