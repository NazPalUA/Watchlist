import { useSearchParams } from "react-router-dom"
import SearchBox from "../../components/SearchBox/SearchBox"
import styles from "./SearchResultsPage.module.scss"
import SearchResultsInfiniteScroll from "./SubComponents/SearchResultsInfiniteScroll"

type SearchResultsPagePropTypes = {
  className?: string
}

function SearchResultsPage({ className }: SearchResultsPagePropTypes) {
  const [searchParams] = useSearchParams()
  const searchTextFilter = searchParams.get("text")

  return (
    <div className={className}>
      <SearchBox className={styles.search} />
      <h4 className={styles.title}>Search Results:</h4>
      {searchTextFilter && (
        <SearchResultsInfiniteScroll searchText={searchTextFilter} />
      )}
    </div>
  )
}

export default SearchResultsPage
