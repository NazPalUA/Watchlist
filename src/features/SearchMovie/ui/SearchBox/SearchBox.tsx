import { ChangeEvent, useState } from "react"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { Button } from "../../../../shared/UI/Button/Button"
import "./SearchBox.scss"

type SearchBoxPropTypes = {
  className?: string
}

function SearchBox({ className }: SearchBoxPropTypes) {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTextFilter = searchParams.get("text") || ""
  const navigate = useNavigate()
  const location = useLocation()
  const [inputText, setInputText] = useState(searchTextFilter)

  // Handler for input change in search field
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const searchText = event.target.value
    setInputText(searchText)
    if (location.pathname === "/search") {
      searchText ? setSearchParams({ text: searchText }) : setSearchParams({})
    }
  }

  function handleClick() {
    if (location.pathname === "/") {
      navigate(`/search?text=${inputText}`)
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault() // Prevent form submission
      handleClick()
    }
  }

  return (
    <div className={`search-box ${className}`}>
      <input
        className="search-box__input"
        type="text"
        name="search"
        id="search-box__input"
        placeholder="Search for movies by title"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
      <Button onClick={handleClick}>search</Button>
    </div>
  )
}

export default SearchBox
