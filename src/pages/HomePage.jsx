import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import Welcome from "../components/Welcome"
import SearchBox from "../components/SearchBox"
import MovieCard from "../components/MovieCard"
import './HomePage.scss'

export default function HomePage(props) {

    const [popular, setPopular] = useState([])

    console.log(popular)

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=e980138e09662908e00ccbeacd080b08')
            .then(response => response.json())
            .then(response => setPopular(response.results.map(movie => {
                return (<li className="home-page__popular-item" key={nanoid()}>
                        <Link to="/movie-page" className="home-page__link">
                            <MovieCard 
                                className="home-page__movie-card" 
                                setModalActive={props.setModalActive}
                                title={movie.title}
                                path={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                year={movie.release_date.slice(0, 4)}
                                rating={Math.round(movie.vote_average*10)}
                            />
                        </Link>
                    </li>)
                
            })))
            .catch(err => console.error(err));
    },[])

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