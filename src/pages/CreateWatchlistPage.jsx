import React, { useContext, useEffect, useState }  from "react"
import { WatchlistsContext } from "../context/WatchlistsContext"
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid"
import './CreateWatchlistPage.scss'

export default function CreateWatchlistPage(props) {
    const navigate = useNavigate()
    const {createWatchlist, setActiveWatchlist} = useContext(WatchlistsContext)

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
        const newId = nanoid()
        createWatchlist(formData.name, formData.description, newId)
        setActiveWatchlist(newId)
        navigate("/watchlist-page")
    }

    return (
        <div className={`create-watchlist-page ${props.className}`}>
            <h4 className="create-watchlist-page__title">
                Create a new watchlist
            </h4>
            <form className="create-watchlist-page__form" onSubmit={handleSubmit}>
                <label className="create-watchlist-page__label" htmlFor="name">
                    Name
                </label>
                <input className="create-watchlist-page__name"
                    type="text"
                    id="name"
                    placeholder=""
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                <label className="create-watchlist-page__label" htmlFor="description">
                    Description
                </label>
                <textarea className="create-watchlist-page__description"
                    id="description"
                    placeholder=""
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                />
                <button className="create-watchlist-page__btn">Create  watchlist</button>
            </form>
        </div>
    )
}