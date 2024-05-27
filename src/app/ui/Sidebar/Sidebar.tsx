import CreateWatchlistNavButton from "../../../features/CreateWatchlist/ui/CreateWatchlistNavButton"
import { NavBar } from "../../../widgets/NavBar"
import { MyWatchlists } from "../../../widgets/WatchlistsList"
import styles from "./Sidebar.module.scss"

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <NavBar />
        <CreateWatchlistNavButton />
      </div>
      <MyWatchlists />
    </div>
  )
}

export default Sidebar
