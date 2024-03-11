import { useParams } from "react-router-dom"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import EditWatchlistForm from "./SubComponents/EditWatchlistForm/EditWatchlistForm"
import EditWatchlistHeader from "./SubComponents/EditWatchlistHeader/EditWatchlistHeader"
import WatchlistMovies from "./SubComponents/WatchlistMovies/WatchlistMovies"

type EditWatchlistPagePropTypes = {
  className?: string
}

function EditWatchlistPage({ className }: EditWatchlistPagePropTypes) {
  // Get the watchlistId from the URL parameters
  const { watchlistId } = useParams()

  if (!watchlistId) {
    return <ErrorMessage>Watchlist not Found</ErrorMessage>
  }

  return (
    <div className={className}>
      <EditWatchlistHeader watchlistId={watchlistId} />
      <EditWatchlistForm watchlistId={watchlistId} />
      <WatchlistMovies watchlistId={watchlistId} />
    </div>
  )
}

export default EditWatchlistPage
