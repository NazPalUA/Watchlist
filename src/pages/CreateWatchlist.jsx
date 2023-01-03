import React from "react"
import './CreateWatchlist.scss'

export default function CreateWatchlist(props) {

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
        <div className={`create-watchlist ${props.className}`}>
            <h4 className="create-watchlist__title">
                Create a new Watchlist
            </h4>
            <form className="create-watchlist__form" onSubmit={handleSubmit}>
                <label className="create-watchlist__label" htmlFor="name">
                    Name
                </label>
                <input className="create-watchlist__name"
                    type="text"
                    id="name"
                    placeholder=""
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                <label className="create-watchlist__label" htmlFor="description">
                    Description
                </label>
                <textarea className="create-watchlist__description"
                    id="description"
                    placeholder=""
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                />
                <button className="create-watchlist__btn">Create  watchlist</button>
            </form>
        </div>
    )
}