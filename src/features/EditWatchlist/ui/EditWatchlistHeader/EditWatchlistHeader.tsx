"use client"

import { useRouter } from "next/router"
import { useDeleteWatchlistMutation } from "../../../../entities/watchlist"
import styles from "./EditWatchlistHeader.module.scss"

type EditWatchlistHeaderProps = { watchlistId: string }

export function EditWatchlistHeader({ watchlistId }: EditWatchlistHeaderProps) {
  const router = useRouter()

  const { mutate: deleteWatchlist } = useDeleteWatchlistMutation()

  // Delete the current watchlist and navigate back to the home page
  function deleteCurrentWatchlist() {
    deleteWatchlist(watchlistId)
    router.push("/")
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
