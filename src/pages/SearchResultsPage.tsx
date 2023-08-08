import { useParams } from "react-router-dom"
import InfiniteScrollMoviesList from '../components/InfiniteScrollMoviesList'
import './SearchResultsPage.scss'

type SearchResultsPagePropTypes = {
    className?: string
}


function SearchResultsPage({className}: SearchResultsPagePropTypes) {
    // Get the search text from the URL parameter
    const { searchText } = useParams()

    return (
        <div className={`search-results-page ${className}`}>
            <h4 className="search-results-page__header">
                Search Results: {searchText}
            </h4>
            <InfiniteScrollMoviesList classNamePrefix="search-results" searchText={searchText} />
        </div>
    )
}

export default SearchResultsPage