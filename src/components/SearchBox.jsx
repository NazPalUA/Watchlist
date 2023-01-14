import React from "react"
import { Link } from "react-router-dom"
import './SearchBox.scss'

export default function SearchBox(props) {

    return (
        <div className={`search-box ${props.className}`}>
            <input 
                className="search-box__input"
                type="text" 
                name="search-box-input" 
                id="search-box__input"
                placeholder="Search for movies by title"
            />
            <Link to="/search-results-page" className="search-box__button">search</Link>
        </div>
    )
}