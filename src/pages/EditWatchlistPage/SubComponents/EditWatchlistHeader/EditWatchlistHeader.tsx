import { useNavigate } from "react-router-dom"
import { useWatchlistsContext } from "../../../../context/WatchlistsContext"
import styles from "./EditWatchlistHeader.module.scss"

type EditWatchlistHeaderProps = { watchlistId: string }

export default function EditWatchlistHeader({
  watchlistId,
}: EditWatchlistHeaderProps) {
  const { deleteWatchlist } = useWatchlistsContext()
  const navigate = useNavigate()

  // Delete the current watchlist and navigate back to the home page
  function deleteCurrentWatchlist() {
    deleteWatchlist(watchlistId)
    navigate("/")
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Edit your Watchlist</h4>
      <button className={styles.btn} onClick={deleteCurrentWatchlist}>
        Delete Watchlist
      </button>
    </div>
  )
}
