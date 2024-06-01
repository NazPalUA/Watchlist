import { useParams } from "react-router-dom"
import { ErrorMessage } from "../../shared/ui/ErrorMessage"
import {
  EditWatchlistForm,
  EditWatchlistHeader,
  WatchlistMovies,
} from "../../widgets/EditWatchlist"

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
