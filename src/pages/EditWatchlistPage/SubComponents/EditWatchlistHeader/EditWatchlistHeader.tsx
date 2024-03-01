import { useNavigate } from "react-router-dom"
import { useUser } from "../../../../context/UserContext"
import { useDeleteWatchlistMutation } from "../../../../services/firebase/firestore/mutations"
import styles from "./EditWatchlistHeader.module.scss"

type EditWatchlistHeaderProps = { watchlistId: string }

export default function EditWatchlistHeader({
  watchlistId,
}: EditWatchlistHeaderProps) {
  const navigate = useNavigate()

  const { user } = useUser()
  const userId = user?.uid
  if (!userId) return <div>Not logged in</div>

  const { mutate: deleteWatchlist } = useDeleteWatchlistMutation(userId)

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
