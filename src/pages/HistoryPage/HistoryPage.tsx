import { useHistoryContext } from "../../context/HistoryContext"
import useMoviesData from "../../hooks/useMoviesData"
import getUniqueIds from "../../utils/getUniqueIds"
import "./HistoryPage.scss"
import Movies from "./SubComponents/Movies"

type HistoryPagePropTypes = {
  className?: string
}

function HistoryPage({ className }: HistoryPagePropTypes) {
  const { historyIds, clearHistory } = useHistoryContext()
  const uniqueHistoryIds = getUniqueIds(historyIds)
  const { moviesData } = useMoviesData(uniqueHistoryIds)

  return (
    <div className={`history-page ${className}`}>
      <button className="history-page__clear-btn" onClick={clearHistory}>
        Clear history
      </button>
      <Movies moviesData={moviesData} />
    </div>
  )
}

export default HistoryPage
