import React, { useContext, useState }  from "react"
import { WatchlistsContext } from "../context/WatchlistsContext"
import { useNavigate, useParams, Link } from "react-router-dom";
import { nanoid } from "nanoid"
import useMoviesData from "../hooks/useMoviesData"
import './EditWatchlistPage.scss'

export default function EditWatchlistPage(props) {
    const navigate = useNavigate()
    const {watchlistId} = useParams()

    const { watchlistsArr, getWatchlistData, deleteWatchlist,
            editWatchlist, getMovieIds, setMovieIdsToWatchlist} 
        = useContext(WatchlistsContext)
        
        const [formData, setFormData] = React.useState({
            name: getWatchlistData(watchlistId).name, 
            description: getWatchlistData(watchlistId).description
        })

    const API_KEY = "e980138e09662908e00ccbeacd080b08"
    const [movieIds, setMovieIds] = useState(getMovieIds(watchlistId))
    const [moviesData] = useMoviesData(movieIds, API_KEY);

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function deleteMovieId(movieId) {
        setMovieIds(prevMovieIds => {
            return prevMovieIds.filter(id => {
                return id !== movieId
            })
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        editWatchlist(formData.name, formData.description, watchlistId)
        setMovieIdsToWatchlist(watchlistId, movieIds)
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
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : null} 
                    alt="movie poster" 
                />
                <p className="edit-watchlist-page__movie-name">
                    {movie.title} <span className="edit-watchlist-page__movie-year">({movie.release_date.slice(0, 4)})</span>
                </p>
                <button 
                    className="edit-watchlist-page__movie-remove-btn"
                    onClick={(e) => {
                        e.preventDefault
                        deleteMovieId(movie.id)
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
                    <Link to={`/watchlist-page/${watchlistId}`} className="edit-watchlist-page__btn edit-watchlist-page__btn_dark">Back</Link>
                    <button className="edit-watchlist-page__btn">Save</button>
                </div>
            </form>

        </div>
    )
}