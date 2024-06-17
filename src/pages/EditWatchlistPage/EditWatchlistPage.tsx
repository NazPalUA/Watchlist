import {
  EditWatchlistForm,
  EditWatchlistHeader,
  WatchlistMovies,
} from "../../features/EditWatchlist"

type EditWatchlistPagePropTypes = {
  className?: string
  watchlistId: string
}

function EditWatchlistPage({
  className,
  watchlistId,
}: EditWatchlistPagePropTypes) {
  return (
    <div className={className}>
      <EditWatchlistHeader watchlistId={watchlistId} />
      <EditWatchlistForm watchlistId={watchlistId} />
      <WatchlistMovies watchlistId={watchlistId} />
    </div>
  )
}

export default EditWatchlistPage
