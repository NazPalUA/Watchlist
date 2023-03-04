import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from "../context/ModalContext"
import { HistoryContext } from "../context/HistoryContext"
import { Link, useParams } from "react-router-dom"
import { nanoid } from "nanoid"
import MovieCard from "../components/MovieCard"
import ActorCard from "../components/ActorCard"
import useFetch from "../hooks/useFetch"
import posterNotFound from "../images/poster_not_found.png"
import './MoviePage.scss'

export default function MoviePage(props) {
    const {setIsModalActive, setMovieId} = useContext(ModalContext)
    const {addToHistory} = useContext(HistoryContext)
    const {movieId} = useParams()

    const API_KEY = "e980138e09662908e00ccbeacd080b08"
    const BASE_URL = "https://api.themoviedb.org/3/movie"

    const movieData = useFetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`).data
    const relatedData = useFetch(`${BASE_URL}/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`).data
    const castData = useFetch(`${BASE_URL}/${movieId}/credits?api_key=${API_KEY}&language=en-US`).data

    useEffect(()=>{
        addToHistory(movieId)
    },[movieId])

    const castList = !castData ? [] : castData.cast.slice(0, 12).map(person => {
        return (
            <li className="movie-page__list-item"
                key={nanoid()}
            >
                <ActorCard 
                    className="movie-page__card"
                    character={person.character}
                    name={person.name}
                    imgPath={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : null}
                />
            </li>
        )
    })

    const relatedList = !relatedData ? [] : relatedData.results.map(movie => {
        return (
            <li className="movie-page__list-item"
                key={nanoid()}
            >
                <Link to={`/movie-page/${movie.id}`} className="movie-page__link">
                    <MovieCard 
                        className="movie-page__card"
                        movieId={movie.id}
                        title={movie.title}
                        path={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : null}
                        year={movie.release_date.slice(0, 4)}
                        rating={Math.round(movie.vote_average*10)}
                    />
                </Link>
            </li>
        )
    })
    

    if(!movieData) return <div className={`movie-page ${props.className}`}></div>

    return (
        <div className={`movie-page ${props.className}`}>
            <div className="movie-page__top-container">
                <img className="movie-page__main-poster" 
                    src={movieData.poster_path ? `https://image.tmdb.org/t/p/original${movieData.poster_path}` : posterNotFound}
                    alt="movie poster" 
                />
                <div className="movie-page__top-right-container">
                    <h3 className="movie-page__title">
                        {movieData.original_title} <span className="movie-page__release-year">({movieData.release_date.slice(0, 4)})</span>
                        
                    </h3>
                    <p className="movie-page__genre">
                        {movieData.genres.map(genre => genre.name).join(', ')}
                    </p>
                    <p className="movie-page__duration">
                        {Math.floor(movieData.runtime/60)}h {movieData.runtime%60}m
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
                                {Math.round(movieData.vote_average*10)}
                            </div>
                        </div>
                        <button 
                            className="movie-page__btn"
                            onClick={e=>{
                                e.preventDefault()
                                e.stopPropagation()
                                setIsModalActive(true)
                                setMovieId(movieId)
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