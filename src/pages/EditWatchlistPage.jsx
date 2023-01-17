import React from "react"
import './EditWatchlistPage.scss'

export default function EditWatchlistPage(props) {

    const [formData, setFormData] = React.useState(
        {
            name: "", 
            description: ""
        }
    )
    
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
        // submitToApi(formData)
        console.log(formData)
    }

    return (
        <div className={`edit-watchlist-page ${props.className}`}>
            <div className="edit-watchlist-page__top">
                <h4 className="edit-watchlist-page__header">
                    Edit your Watchlist
                </h4>
                <button className="edit-watchlist-page__delete-btn">
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
                    <li className="edit-watchlist-page__movies-item">
                        <img className="edit-watchlist-page__movie-img" src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg" alt="movie poster" />
                        <p className="edit-watchlist-page__movie-name">
                            Top Gun: Maverick <span className="edit-watchlist-page__movie-year">(2022)</span>
                        </p>
                        <button className="edit-watchlist-page__movie-remove-btn">Remove</button>
                    </li>
                    <li className="edit-watchlist-page__movies-item">
                        <img className="edit-watchlist-page__movie-img" src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg" alt="movie poster" />
                        <p className="edit-watchlist-page__movie-name">
                            Top Gun: Maverick <span className="edit-watchlist-page__movie-year">(2022)</span>
                        </p>
                        <button className="edit-watchlist-page__movie-remove-btn">Remove</button>
                    </li>
                    <li className="edit-watchlist-page__movies-item">
                        <img className="edit-watchlist-page__movie-img" src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg" alt="movie poster" />
                        <p className="edit-watchlist-page__movie-name">
                            Top Gun: Maverick <span className="edit-watchlist-page__movie-year">(2022)</span>
                        </p>
                        <button className="edit-watchlist-page__movie-remove-btn">Remove</button>
                    </li>
                    <li className="edit-watchlist-page__movies-item">
                        <img className="edit-watchlist-page__movie-img" src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg" alt="movie poster" />
                        <p className="edit-watchlist-page__movie-name">
                            Top Gun: Maverick <span className="edit-watchlist-page__movie-year">(2022)</span>
                        </p>
                        <button className="edit-watchlist-page__movie-remove-btn">Remove</button>
                    </li>
                </ul>
                <div className="edit-watchlist-page__btns-container">
                    <button className="edit-watchlist-page__btn">Save</button>
                    <button className="edit-watchlist-page__btn edit-watchlist-page__btn_dark">Cancel</button>
                </div>
            </form>

        </div>
    )
}