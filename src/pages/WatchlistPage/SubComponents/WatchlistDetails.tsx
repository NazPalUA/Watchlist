import { Link } from "react-router-dom"
import editIcon from "../../../assets/images/edit_icon.svg"
import { useWatchlistsContext } from "../../../context/WatchlistsContext"
import { MovieDetails } from "../../../services/tmdb"
import getAverageVote from "../utils/getAverageVote"
import getUnwatchedRuntime from "../utils/getUnwatchedRuntime"

type PropTypes = {
  watchlistId: string
  moviesData: MovieDetails[]
}

export default function WatchlistDetails({
  watchlistId,
  moviesData,
}: PropTypes) {
  const avgScore = getAverageVote(moviesData)
  const unwatchedRuntime = getUnwatchedRuntime(moviesData)
  // Get the watchlist data and the movie IDs in the watchlists from the context
  const { getWatchlistData } = useWatchlistsContext()
  return (
    <>
      <div className="watchlist-page__header-container">
        <h2 className="watchlist-page__header">
          {getWatchlistData(watchlistId)?.name}
        </h2>
        <Link to={`edit`} className="watchlist-page__edit">
          <img
            className="watchlist-page__edit-icon"
            src={editIcon}
            alt="edit icon"
          />
        </Link>
      </div>
      <h5 className="watchlist-page__about-title">About this watchlist</h5>
      <p className="watchlist-page__about">
        {getWatchlistData(watchlistId)?.description}
      </p>
      <ul className="watchlist-page__boxes-container">
        <li className="watchlist-page__box">
          <strong className="watchlist-page__box-name">ITEMS ON LIST</strong>
          <p className="watchlist-page__box-content">{moviesData.length}</p>
        </li>
        <li className="watchlist-page__box">
          <strong className="watchlist-page__box-name">
            UNWATCHED RUNTIME
          </strong>
          <p className="watchlist-page__box-content">{unwatchedRuntime}</p>
        </li>
        <li className="watchlist-page__box">
          <strong className="watchlist-page__box-name">AVERAGE SCORE</strong>
          <p className="watchlist-page__box-content">
            {isNaN(avgScore) ? "0" : avgScore}
          </p>
        </li>
      </ul>
    </>
  )
}
