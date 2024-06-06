import { MoviesList, useMoviesDetailsQuery } from "../../entities/movie"
import { useGetUserQuery } from "../../entities/session"
import { useHistoryContext } from "../../shared/context/HistoryContext"
import { filterUniqueIds } from "../../shared/lib/utils"
import { ErrorMessage } from "../../shared/ui/ErrorMessage"
import Loader from "../../shared/ui/Loader"
import "./HistoryPage.scss"

type HistoryPagePropTypes = {
  className?: string
}

function HistoryPage({ className }: HistoryPagePropTypes) {
  const { historyIds, clearHistory } = useHistoryContext()
  const uniqueHistoryIds = filterUniqueIds(historyIds)
  const {
    data: moviesData,
    isError,
    error,
    isLoading,
  } = useMoviesDetailsQuery(uniqueHistoryIds)

  const { data: sessionData } = useGetUserQuery()

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
          <MoviesList
            moviesData={moviesData}
            showAddToPlaylistBtn={sessionData ? true : false}
          />
        </>
      )}
    </div>
  )
}

export default HistoryPage
