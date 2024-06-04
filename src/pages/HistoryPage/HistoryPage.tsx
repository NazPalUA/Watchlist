import { useMoviesDetails } from "../../entities/movie"
import { useHistoryContext } from "../../shared/context/HistoryContext"
import getUniqueIds from "../../shared/lib/utils/getUniqueIds"
import { ErrorMessage } from "../../shared/ui/ErrorMessage"
import Loader from "../../shared/ui/Loader"
import MoviesList from "../../shared/ui/MoviesList/MoviesList"
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

  if (isLoading) return <Loader />

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
