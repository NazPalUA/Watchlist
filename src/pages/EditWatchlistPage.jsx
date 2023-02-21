import React, { useContext, useEffect, useState }  from "react"
import { WatchlistsContext } from "../context/WatchlistsContext"
import { useNavigate, useParams, Link } from "react-router-dom";
import { nanoid } from "nanoid"
import './EditWatchlistPage.scss'

export default function EditWatchlistPage(props) {
    const navigate = useNavigate()
    const {watchlistId} = useParams()
    const [moviesData, setMoviesData] = useState([])
    
    const { watchlistsArr, getWatchlistData, deleteWatchlist,
            editWatchlist, getMovieIds, deleteMovieFromWatchlist} 
        = useContext(WatchlistsContext)
        
        const [formData, setFormData] = React.useState({
            name: getWatchlistData(watchlistId).name, 
            description: getWatchlistData(watchlistId).description
        })

    const API_KEY = "e980138e09662908e00ccbeacd080b08"
    const BASE_URL = "https://api.themoviedb.org/3/movie"

    useEffect(()=>{ 
        const movieIds = getMovieIds(watchlistId)
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

        fetchData();
    },[watchlistId, watchlistsArr])
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        // console.log(formData)
        editWatchlist(formData.name, formData.description, watchlistId)
        navigate(`/watchlist-page/${watchlistId}`)
    }

    function deleteCurrentWatchlist() {
        deleteWatchlist(getWatchlistData(watchlistId).id)
        navigate("/")
    }

    const moviesList = moviesData.map(movie => {
        return (
            <li className="edit-watchlist-page__movies-item"
                key={nanoid()}
            >
                <img 
                    className="edit-watchlist-page__movie-img" 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt="movie poster" 
                />
                <p className="edit-watchlist-page__movie-name">
                    {movie.title} <span className="edit-watchlist-page__movie-year">({movie.release_date.slice(0, 4)})</span>
                </p>
                <button 
                    className="edit-watchlist-page__movie-remove-btn"
                    onClick={(e) => {
                        e.preventDefault
                        deleteMovieFromWatchlist(movie.id, watchlistId)
                    }}
                >
                    Remove
                </button>
            </li>
        )
    })

    return (
        <div className={`edit-watchlist-page ${props.className}`}>
            <div className="edit-watchlist-page__top">
                <h4 className="edit-watchlist-page__header">
                    Edit your Watchlist
                </h4>
                <button 
                    className="edit-watchlist-page__delete-btn"
                    onClick={deleteCurrentWatchlist}
                >
                    Delete Watchlist
                </button>
            </div>

            <form className="edit-watchlist-page__form" onSubmit={handleSubmit}>
                <label className="edit-watchlist-page__label" htmlFor="name">
                    Name
                </label>
                <input className="edit-watchlist-page__name"
                    type="text"
                    id="name"
                    placeholder=""
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                <label className="edit-watchlist-page__label" htmlFor="description">
                    Description
                </label>
                <textarea className="edit-watchlist-page__description"
                    id="description"
                    placeholder=""
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                />
                <strong className="edit-watchlist-page__movies-title">Movies</strong>
                <ul className="edit-watchlist-page__movies-list">
                    {moviesList}
                </ul>
                <div className="edit-watchlist-page__btns-container">
                    <button className="edit-watchlist-page__btn">Save</button>
                    <Link to={`/watchlist-page/${watchlistId}`} className="edit-watchlist-page__btn edit-watchlist-page__btn_dark">Back</Link>
                </div>
            </form>

        </div>
    )
}