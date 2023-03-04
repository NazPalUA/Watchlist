import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import Welcome from "../components/Welcome"
import SearchBox from "../components/SearchBox"
import MovieCard from "../components/MovieCard"
import useFetch from "../hooks/useFetch"
import './HomePage.scss'

export default function HomePage(props) {

    const BASE_URL = "https://api.themoviedb.org/3"
    const API_KEY = "e980138e09662908e00ccbeacd080b08"
    const { data, loading, error } = useFetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)

    const popular = !data ? [] : data.results.map(movie => {
        return (
            <li className="home-page__popular-item" key={nanoid()}>
                <Link to={`/movie-page/${movie.id}`} className="home-page__link">
                    <MovieCard 
                        className="home-page__movie-card"
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

    return (
        <div className={`home-page ${props.className}`}>
            <Welcome className="home-page__welcome" />
            <SearchBox className="home-page__search-box" />
            <h4 className="home-page__popular-title">Popular movies right now</h4>
            <ul className="home-page__popular-list card-grid">
                {popular}
            </ul>
        </div>
    )
}