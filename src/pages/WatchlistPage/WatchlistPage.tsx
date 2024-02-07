import { useParams } from "react-router-dom"
import CustomLoader from "../../components/CustomLoader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { useWatchlistsContext } from "../../context/WatchlistsContext"
import { useMoviesDetails } from "../../services/tmdb"
import getUniqueIds from "../../utils/getUniqueIds"
import Movies from "./SubComponents/Movies"
import WatchlistDetails from "./SubComponents/WatchlistDetails"
import "./WatchlistPage.scss"

type WatchlistPagePropTypes = {
  className?: string
}

function WatchlistPage({ className }: WatchlistPagePropTypes) {
  const { watchlistId } = useParams()
  const { isExist, getMovieIds, getWatchlistData } = useWatchlistsContext()
  const exist = isExist(watchlistId)
  const allMovieIds = getMovieIds(watchlistId)
  const movieIds = allMovieIds ? getUniqueIds(allMovieIds) : []
  const { data, isError, error, isLoading } = useMoviesDetails(movieIds)

  const watchlistData = getWatchlistData(watchlistId)
  const { name: watchlistName, description: watchlistDescription } =
    watchlistData || {}

  if (isLoading) return <CustomLoader />

  if (!watchlistId || !exist)
    return <ErrorMessage>Watchlist not found!</ErrorMessage>

  if (isError || !data)
    return (
      <ErrorMessage error={error}>
        Something went wrong! Please try again later.
      </ErrorMessage>
    )

  return (
    <div className={`watchlist-page ${className}`}>
      <WatchlistDetails
        moviesData={data}
        name={watchlistName ?? ""}
        description={watchlistDescription ?? ""}
      />
      <Movies moviesData={data} />
    </div>
  )
}

export default WatchlistPage
