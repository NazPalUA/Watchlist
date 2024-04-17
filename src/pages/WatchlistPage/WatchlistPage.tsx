import { useParams } from "react-router-dom"
import CustomLoader from "../../components/CustomLoader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { useGetWatchlistDataQuery } from "../../services/firebase/firestoreObsolete/queries"
import { useMoviesDetails } from "../../services/tmdb"
import Movies from "./SubComponents/Movies"
import WatchlistDetails from "./SubComponents/WatchlistDetails"
import "./WatchlistPage.scss"

type WatchlistPagePropTypes = {
  className?: string
}

function WatchlistPage({ className }: WatchlistPagePropTypes) {
  const { watchlistId } = useParams()
  if (!watchlistId) return null

  const { data: watchlistData } = useGetWatchlistDataQuery(watchlistId)
  const userMovies = watchlistData?.movies
  const movieIds = userMovies?.map((movie) => movie.id) || []

  const {
    data: moviesData,
    isError,
    error,
    isLoading,
  } = useMoviesDetails(movieIds)

  if (isLoading) return <CustomLoader />

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
      <Movies moviesData={moviesData} />
    </div>
  )
}

export default WatchlistPage
