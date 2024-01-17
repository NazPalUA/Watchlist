import { ChangeEvent } from "react"
import { useSearchParams } from "react-router-dom"
import './SearchBox.scss'

type SearchBoxPropTypes = {
    className?: string
}

function SearchBox({ className }: SearchBoxPropTypes) {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchFilter = searchParams.get("search") || ""
    
    // Handler for input change in search field
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const searchText = event.target.value
        searchText ? setSearchParams({search: searchText}) : setSearchParams({})
    }

    return (
        <div className={`search-box ${className}`}>
            <input className="search-box__input"
                type="text"
                name="search"
                id="search-box__input"
                placeholder="Search for movies by title"
                onChange={handleChange}
                value={ searchFilter }
            />
            <button className="search-box__button">search</button>
        </div>
    )
}

export default SearchBox
