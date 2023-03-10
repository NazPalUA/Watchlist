import React from "react"
import { useNavigate } from "react-router-dom"
import './SearchBox.scss'

function SearchBox(props) {
    // Component state to store search query text
    const [searchText, setSearchText] = React.useState("")

    // Navigation hook to navigate to another page
    const navigate = useNavigate()

    // Handler for input change in search field
    function handleChange(event) {
        setSearchText(event.target.value)
    }
    
    // Handler for submitting search form
    function handleSubmit() {
        navigate(`/search-results-page/${searchText}`)
        setSearchText("")
    }

    // Handler for key down event on search field
    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            handleSubmit()
        }
    }

    return (
        <div className={`search-box ${props.className}`}>
            <input className="search-box__input"
                type="text" 
                name="search" 
                id="search-box__input"
                placeholder="Search for movies by title"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={searchText}
            />
            <button className="search-box__button"
                onClick={handleSubmit}
                >
                    search
            </button>
        </div>
    )
}

SearchBox.defaultProps = {
    className: ""
}
    
export default SearchBox
