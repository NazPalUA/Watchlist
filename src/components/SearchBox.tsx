import { useState, ChangeEvent, KeyboardEvent } from "react"
import { useNavigate } from "react-router-dom"
import './SearchBox.scss'


type SearchBoxPropTypes = {
    className?: string
}

function SearchBox({ className }: SearchBoxPropTypes) {
    // Component state to store search query text
    const [searchText, setSearchText] = useState("")

    
    // Handler for input change in search field
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }
    
    // Handler for submitting search form
    const navigate = useNavigate()
    function handleSubmit() {
        if(searchText) {
            navigate(`/search-results-page/${searchText}`)
            setSearchText("")
        }
    }

    // Handler for key down event on search field
    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            handleSubmit()
        }
    }

    return (
        <div className={`search-box ${className}`}>
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


export default SearchBox
