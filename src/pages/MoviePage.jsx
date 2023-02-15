import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { nanoid } from "nanoid"
import MovieCard from "../components/MovieCard"
import ActorCard from "../components/ActorCard"
import './MoviePage.scss'

export default function MoviePage(props) {

    const {movieId} = useParams()

    const [movieData, setMovieData] = useState()
    const [relatedData, setRelatedData] = useState([])
    const [castData, setCastData] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e980138e09662908e00ccbeacd080b08&language=en-US`)
            .then(response => response.json())
            .then(response => setMovieData(response))
            .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=e980138e09662908e00ccbeacd080b08&language=en-US&page=1`)
            .then(response => response.json())
            .then(response => setRelatedData(response.results))
            .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e980138e09662908e00ccbeacd080b08&language=en-US`)
            .then(response => response.json())
            .then(response => setCastData(response.cast))
            .catch(err => console.error(err));
    },[movieId])


    const castList = castData.slice(0, 12).map(person => {
        return (
            <li className="movie-page__list-item"
                key={nanoid()}
            >
                <ActorCard 
                    className="movie-page__card"
                    character={person.character}
                    name={person.name}
                    imgPath={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                />
            </li>
        )
    })

    const relatedList = relatedData.map(movie => {
        return (
            <li className="movie-page__list-item"
                key={nanoid()}
            >
                <Link to={`/movie-page/${movie.id}`} className="movie-page__link">
                    <MovieCard 
                        className="movie-page__card" 
                        setModalActive={props.setModalActive}
                        title={movie.title}
                        path={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        year={movie.release_date.slice(0, 4)}
                        rating={Math.round(movie.vote_average*10)}
                    />
                </Link>
            </li>
        )
    })
    

    if(movieData === undefined) return <div className={`movie-page ${props.className}`}></div>

    return (
        <div className={`movie-page ${props.className}`}>
            <div className="movie-page__top-container">
                <img className="movie-page__main-poster" 
                    src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
                    alt="movie poster" 
                />
                <div className="movie-page__top-right-container">
                    <h3 className="movie-page__title">
                        {movieData.original_title} <span className="movie-page__release-year">({movieData.release_date.slice(0, 4)})</span>
                        
                    </h3>
                    <p className="movie-page__genre">
                        {/* Action, Drama */}
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