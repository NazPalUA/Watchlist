import { useSearchParams } from "react-router-dom"
import SearchBox from "../../features/SearchMovie/ui/SearchBox/SearchBox"
import { SearchResults } from "../../widgets/SearchResults"
import styles from "./SearchResultsPage.module.scss"

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
      {searchTextFilter && <SearchResults searchText={searchTextFilter} />}
    </div>
  )
}

export default SearchResultsPage
