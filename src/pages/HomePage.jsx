import React from "react"
import { Link } from "react-router-dom"
import InfiniteScroll from 'react-infinite-scroll-component'
import { nanoid } from "nanoid"
import useMultiplePageApi from "../hooks/useMultiplePageApi"
import Welcome from "../components/Welcome"
import SearchBox from "../components/SearchBox"
import MovieCard from "../components/MovieCard"
import './HomePage.scss'

function HomePage(props) {
    const BASE_URL = "https://api.themoviedb.org/3"
    const { data, hasMore, page, setUrl } = useMultiplePageApi(`${BASE_URL}/movie//popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`)

    const popularMoviesListHTML = !data ? [] : data.map(movie => {
        return (
            <li className="home-page__popular-item" key={nanoid()}>
                <Link to={`/movie-page/${movie.id}`} className="home-page__link">
                    <MovieCard
                        className="home-page__movie-card"
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
        <div className={`home-page ${props.className}`}>
            <Welcome className="home-page__welcome" />
            <SearchBox className="home-page__search-box" />
            <h4 className="home-page__popular-title">Popular movies right now</h4>
            <InfiniteScroll
                dataLength={data.length}
                next={()=>setUrl(`${BASE_URL}/movie//popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${page}`)}
                hasMore={hasMore} 
                loader={<h4>Loading...</h4>}
                endMessage={<p>No more movies</p>}
            >
                <ul className="home-page__popular-list card-grid">
                    {popularMoviesListHTML}
                </ul>
            </InfiniteScroll>
        </div>
    )
}

HomePage.defaultProps = {
    className: ""
}

export default HomePage