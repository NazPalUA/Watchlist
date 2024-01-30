import InfiniteScroll from "react-infinite-scroll-component"
import { useSearchParams } from "react-router-dom"
import MoviesList from "../../components/MoviesList/MoviesList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { useInfiniteSearchMovie } from "../../services/tmdb"
import "./SearchResultsPage.scss"
import EndMessage from "./SubComponents/EndMessage"

type SearchResultsPagePropTypes = {
  className?: string
}

function SearchResultsPage({ className }: SearchResultsPagePropTypes) {
  const [searchParams] = useSearchParams()

  const searchTextFilter = searchParams.get("text") || null

  const { data, isError, fetchNextPage, hasNextPage } = useInfiniteSearchMovie(
    searchTextFilter || ""
  )

  const movies = data?.pages.map((page) => page.results).flat() || []

  return (
    <div className={`search-results-page ${className}`}>
      <SearchBox className="search-results-page__search-box" />
      <h4 className="search-results-page__title">Search Results:</h4>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={<EndMessage error={isError} length={movies.length} />}
      >
        <MoviesList moviesData={movies} />
      </InfiniteScroll>
    </div>
  )
}

export default SearchResultsPage
