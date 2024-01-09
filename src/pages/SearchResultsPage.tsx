import { useSearchParams } from "react-router-dom"
import InfiniteScrollList from '../components/InfiniteScrollList'
import SearchBox from "../components/SearchBox"
import './SearchResultsPage.scss'
import { useEffect } from "react"

type SearchResultsPagePropTypes = {
    className?: string
}


function SearchResultsPage({className}: SearchResultsPagePropTypes) {
    // Get the search text from the URL parameter
    const [searchParams] = useSearchParams()

    const searchText = searchParams ? searchParams.get("text") : null

    useEffect(() => {
    }, [searchText])

    return (
        <div className={`search-results-page ${className}`}>
            <SearchBox className="search-results-page__search-box" />
            <h4 className="search-results-page__header">
                Search Results: {searchText}
            </h4>
            <InfiniteScrollList className="search-results__list" variant="search" searchText={searchText} />
        </div>
    )
}

export default SearchResultsPage