import { useParams } from "react-router-dom"
import { useWatchlistsContext } from "../../context/WatchlistsContext"
import useMoviesData from "../../hooks/useMoviesData"
import getUniqueIds from "../../utils/getUniqueIds"
import Movies from "./SubComponents/Movies"
import WatchlistDetails from "./SubComponents/WatchlistDetails"
import "./WatchlistPage.scss"

type WatchlistPagePropTypes = {
  className?: string
}

function WatchlistPage({ className }: WatchlistPagePropTypes) {
  const { watchlistId } = useParams()

  if (!watchlistId) return <h1>Watchlist not found!</h1>

  // Get the watchlist data and the movie IDs in the watchlists from the context
  const { isExist, getMovieIds } = useWatchlistsContext()

  const exist = isExist(watchlistId)
  if (!exist) return <h1>Watchlist not found!</h1>

  // Get the movie data for all the movies in the watchlist
  const allMovieIds = getMovieIds(watchlistId)
  const movieIds = allMovieIds ? getUniqueIds(allMovieIds) : []
  const { moviesData } = useMoviesData(movieIds)

  return (
    <div className={`watchlist-page ${className}`}>
      <WatchlistDetails moviesData={moviesData} watchlistId={watchlistId} />
      <Movies moviesData={moviesData} />
    </div>
  )
}

export default WatchlistPage
