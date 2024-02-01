import CustomLoader from "../../components/CustomLoader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import MoviesList from "../../components/MoviesList/MoviesList"
import { useHistoryContext } from "../../context/HistoryContext"
import { useMoviesDetails } from "../../services/tmdb"
import getUniqueIds from "../../utils/getUniqueIds"
import "./HistoryPage.scss"

type HistoryPagePropTypes = {
  className?: string
}

function HistoryPage({ className }: HistoryPagePropTypes) {
  const { historyIds, clearHistory } = useHistoryContext()
  const uniqueHistoryIds = getUniqueIds(historyIds)
  const {
    data: moviesData,
    isError,
    error,
    isLoading,
  } = useMoviesDetails(uniqueHistoryIds)

  if (isLoading) return <CustomLoader />

  if (isError)
    return (
      <ErrorMessage error={error}>
        Something went wrong! Please try again later.
      </ErrorMessage>
    )

  return (
    <div className={`history-page ${className}`}>
      {!moviesData ? (
        <p>No history found!</p>
      ) : (
        <>
          <button className="history-page__clear-btn" onClick={clearHistory}>
            Clear history
          </button>
          <MoviesList moviesData={moviesData} />
        </>
      )}
    </div>
  )
}

export default HistoryPage
