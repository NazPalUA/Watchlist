import { useParams } from "react-router-dom"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { useWatchlistsContext } from "../../context/WatchlistsContext"
import EditWatchlistForm from "./SubComponents/EditWatchlistForm/EditWatchlistForm"
import EditWatchlistHeader from "./SubComponents/EditWatchlistHeader/EditWatchlistHeader"

type EditWatchlistPagePropTypes = {
  className?: string
}

function EditWatchlistPage({ className }: EditWatchlistPagePropTypes) {
  // Get the necessary functions from the WatchlistsContext
  const { isExist } = useWatchlistsContext()

  // Get the watchlistId from the URL parameters
  const { watchlistId } = useParams()
  const isWatchlistExist = isExist(watchlistId)

  if (!watchlistId || !isWatchlistExist) {
    return <ErrorMessage>Watchlist not Found</ErrorMessage>
  }

  return (
    <div className={className}>
      <EditWatchlistHeader watchlistId={watchlistId} />
      <EditWatchlistForm watchlistId={watchlistId} />
    </div>
  )
}

export default EditWatchlistPage
