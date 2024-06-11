import { useSessionQuery } from "../../../../entities/session"
import Loader from "../../../../shared/ui/Loader"

import { NoAuth } from "../../../../widgets/WatchlistsList/ui/NoAuth/NoAuth"
import { List } from "../List/List"
import styles from "./WatchlistsPage.module.scss"

function WatchlistsPage() {
  const { data: user, isLoading } = useSessionQuery()

  const content = user ? <List /> : <NoAuth />

  return (
    <div className={styles.container}>
      <p className={styles.header}>My Lists</p>
      {isLoading ? <Loader /> : content}
    </div>
  )
}

export default WatchlistsPage
