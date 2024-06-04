import { CreateWatchlistNavButton } from "../../../features/CreateWatchlist"
import { AsideNavBar } from "../../../widgets/AsideNavBar"
import { MyWatchlists } from "../../../widgets/WatchlistsList"
import styles from "./Sidebar.module.scss"

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <AsideNavBar />
        <CreateWatchlistNavButton />
      </div>
      <MyWatchlists />
    </div>
  )
}

export default Sidebar
