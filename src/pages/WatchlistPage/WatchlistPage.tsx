import { useParams } from "react-router-dom"
import {
  useGetSingleWatchlistQuery,
  useGetWatchlistMoviesQuery,
} from "../../entities/watchlist/api/queries/hooks"
import WatchListMovies from "../../entities/watchlist/ui/WatchListMovies/WatchListMovies"
import WatchlistDetails from "../../entities/watchlist/ui/WatchlistDetails/WatchlistDetails"
import { useMoviesDetails } from "../../shared/API/tmdb"
import { ErrorMessage } from "../../shared/ui/ErrorMessage"
import Loader from "../../shared/ui/Loader"
import "./WatchlistPage.scss"

type WatchlistPagePropTypes = {
  className?: string
}

function WatchlistPage({ className }: WatchlistPagePropTypes) {
  const { watchlistId } = useParams()
  if (!watchlistId) return null

  const { data: watchlistData } = useGetSingleWatchlistQuery(watchlistId)
  const { data: userMovies } = useGetWatchlistMoviesQuery(watchlistId)
  const movieIds = userMovies?.map((movie) => movie.tmdbId) || []

  const {
    data: moviesData,
    isError,
    error,
    isLoading,
  } = useMoviesDetails(movieIds)

  if (isLoading) return <Loader />

  if (!watchlistId) return <ErrorMessage>Watchlist not found!</ErrorMessage>

  if (isError || !moviesData)
    return (
      <ErrorMessage error={error}>
        Something went wrong! Please try again later.
      </ErrorMessage>
    )

  return (
    <div className={`watchlist-page ${className}`}>
      <WatchlistDetails
        moviesData={moviesData}
        name={watchlistData?.name ?? ""}
        description={watchlistData?.description ?? ""}
      />
      <WatchListMovies moviesData={moviesData} />
    </div>
  )
}

export default WatchlistPage
