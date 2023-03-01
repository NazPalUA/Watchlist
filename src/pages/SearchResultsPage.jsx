import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { nanoid } from "nanoid"
import MovieCard from "../components/MovieCard"
import './SearchResultsPage.scss'

export default function SearchResultsPage(props) {
    const {searchText} = useParams()

    const [movieIds, setMovieIds] = useState([])
    const [moviesData, setMoviesData] = useState([])
    
    const API_KEY = "e980138e09662908e00ccbeacd080b08"
    
    useEffect(()=>{
        const BASE_URL = "https://api.themoviedb.org/3/search"
        fetch(`${BASE_URL}/movie?api_key=${API_KEY}&query=${searchText}&page=1`)
            .then(response => response.json())
            .then(response => setMovieIds(response.results.map(i => i.id)))
            .catch(err => console.error(err));
    },[searchText])

    useEffect(()=>{
        const BASE_URL = "https://api.themoviedb.org/3/movie"
        // const movieIds = movieIds
        async function fetchData() {
            try {
                const responses = await Promise.all(movieIds.map(movieId => fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`)))
                if (!responses.every(response => response.ok)) {
                    throw new Error('Some requests failed')
                }
                const data = await Promise.all(responses.map(response => response.json()))
                setMoviesData(data)
            } catch (error) {
                console.error(error)
            }
        }

        movieIds !== undefined && movieIds.length > 0 && fetchData();
    },[movieIds])

    const searchList = moviesData.map(movie => {
        return(
            <li className="search-results-page__item"
                key={nanoid()}
            >
                <Link to={`/movie-page/${movie.id}`} className="search-results-page__link">
                    <MovieCard 
                        className="search-results-page__movie-card"
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
        <div className={`search-results-page ${props.className}`}>
            <h4 className="search-results-page__header">
                Search Results: {searchText}
            </h4>
            <ul className="search-results-page__list card-grid">
                {searchList}
            </ul>
        </div>
    )
}