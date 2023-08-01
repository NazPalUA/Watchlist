import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { WatchlistsContext, WatchlistsContextType } from "../context/WatchlistsContext"
import useMoviesData from "../hooks/useMoviesData"
import posterNotFound from "../images/poster_not_found.png"
import './EditWatchlistPage.scss'

type FormData = {
    name: string | undefined;
    description: string | undefined;
}

type EditWatchlistPagePropTypes = {
    className?: string
}

function EditWatchlistPage({className}: EditWatchlistPagePropTypes) {
    // Get the necessary functions from the WatchlistsContext
    const { 
        getWatchlistData, 
        deleteWatchlist, 
        editWatchlist,
        getMovieIds
    } = useContext(WatchlistsContext) as WatchlistsContextType
    
    // Get the navigation function from react-router-dom
    const navigate = useNavigate()

    // Get the watchlistId from the URL parameters
    const { watchlistId } = useParams()

    // Get the copy of current movieIds and their data using the custom hook
    const [movieIds, setMovieIds] = useState(getMovieIds(watchlistId) || [])
    const {moviesData} = useMoviesData(movieIds)
    
    // Get the current watchlist's name and description as initial values for the form
    const [formData, setFormData] = useState<FormData>({
        name: getWatchlistData(watchlistId)?.name,
        description: getWatchlistData(watchlistId)?.description
    })

    // Handle changes to the form inputs
    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target
        // Update the formData based on the input's name and type
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // Delete a movieId from the current watchlist
    function deleteMovieId(e: React.MouseEvent, movieId: string) {
        e.preventDefault()
        if (watchlistId) {
            setMovieIds(prevMovieIds => prevMovieIds.filter(id => id !== movieId))
        }
    }
    
    // Delete the current watchlist and navigate back to the home page
    function deleteCurrentWatchlist() {
        deleteWatchlist(watchlistId)
        navigate("/")
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if(formData.name && watchlistId) {
            // Save the performed changes to the watchlist's name, description and movieIds
            editWatchlist(formData.name, formData.description, movieIds, watchlistId)
            // Navigate to the watchlist page
            navigate(`/watchlist-page/${watchlistId}`)
        }
    }

    // Create the HTML for each movie in the watchlist
    const moviesListHTML = moviesData.map(movie => (
        <li className="edit-watchlist-page__movies-item"
            key={movie.id}
        >
            <img
                className="edit-watchlist-page__movie-img"
                src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : posterNotFound}
                alt="movie poster"
            />
            <p className="edit-watchlist-page__movie-name">
                {movie.title} <span className="edit-watchlist-page__movie-year">({movie.release_date.toString().slice(0, 4)})</span>
            </p>
            <button
                className="edit-watchlist-page__movie-remove-btn"
                onClick={(e) => deleteMovieId(e, movie.id.toString())}
            >
                Remove
            </button>
        </li>
    ))

    return (
        <div className={`edit-watchlist-page ${className}`}>
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
                    {moviesListHTML}
                </ul>
                <div className="edit-watchlist-page__btns-container">
                    <Link to={`/watchlist-page/${watchlistId}`} className="edit-watchlist-page__btn edit-watchlist-page__btn_dark">Back</Link>
                    <button className="edit-watchlist-page__btn">Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditWatchlistPage