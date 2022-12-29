import React from "react"
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
            <button className="search-box__button">search</button>
        </div>
    )
}