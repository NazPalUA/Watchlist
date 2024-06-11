import { useParams } from "react-router-dom"
import { MoviesList, useMoviesDetailsQuery } from "../../entities/movie"
import {
  WatchlistDetails,
  useGetSingleWatchlistQuery,
  useGetWatchlistMoviesQuery,
} from "../../entities/watchlist"
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
  } = useMoviesDetailsQuery(movieIds)

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
      <MoviesList moviesData={moviesData} showAddToPlaylistBtn={false} />
    </div>
  )
}

export default WatchlistPage
