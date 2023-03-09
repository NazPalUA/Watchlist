import React, { useState, useEffect } from "react"
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link, useParams } from "react-router-dom"
import { nanoid } from "nanoid"
import MovieCard from "../components/MovieCard"
import useMoviesData from "../hooks/useMoviesData"
import useMultiplePageApi from "../hooks/useMultiplePageApi"
import './SearchResultsPage.scss'

export default function SearchResultsPage(props) {
    const { searchText } = useParams()

    const [movieIds, setMovieIds] = useState([])

    const API_KEY = "e980138e09662908e00ccbeacd080b08"
    const BASE_URL = "https://api.themoviedb.org/3/search"

    const { data, loading, hasMore, page, setUrl } = useMultiplePageApi(`${BASE_URL}/movie?api_key=${API_KEY}&query=${searchText}&page=1`)
    useEffect(() => setMovieIds(data ? data.map(i => i.id) : []), [data])

    const [moviesData, loadingMoviesData] = useMoviesData(movieIds, API_KEY)

    const searchList = moviesData.map(movie => {
        return (
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
                        rating={Math.round(movie.vote_average * 10)}
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
                <InfiniteScroll
                    dataLength={movieIds.length}
                    next={()=>setUrl(`${BASE_URL}/movie?api_key=${API_KEY}&query=${searchText}&page=${page}`)}
                    hasMore={hasMore} 
                    loader={<h4>Loading...</h4>}
                    endMessage={movieIds.length ? <p>No more movies</p> : <p>No results</p>}
            >
                <ul className="search-results-page__list card-grid">{searchList}</ul>
            </InfiniteScroll>
        </div>
    )
}