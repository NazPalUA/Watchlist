import React from "react"
import { Link, useNavigate } from "react-router-dom"
import './SearchBox.scss'

export default function SearchBox(props) {

    const navigate = useNavigate()

    const [searchText, setSearchText] = React.useState("")

    function handleChange(event) {
        const {value} = event.target
        setSearchText(value)
    }
    
    function handleSubmit() {
        navigate(`/search-results-page/${searchText}`)
        setSearchText("")
    }

    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            handleSubmit()
        }
    }

    return (
        <div className={`search-box ${props.className}`}>
            <input 
                className="search-box__input"
                type="text" 
                name="search" 
                id="search-box__input"
                placeholder="Search for movies by title"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={searchText}
            />
            <button 
                className="search-box__button"
                onClick={handleSubmit}
                >
                    search
            </button>
        </div>
    )
}
