import { CreateWatchlistNavButton } from "../../../features/CreateWatchlist"
import { useSidebarContext } from "../../../shared/context"
import { AsideNavBar } from "../../../widgets/AsideNavBar"
import { MyWatchlists } from "../../../widgets/WatchlistsList"
import styles from "./Sidebar.module.scss"

function Sidebar() {
  const { isSidebarOpen } = useSidebarContext()
  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <AsideNavBar />
        <CreateWatchlistNavButton onlyIcon={!isSidebarOpen} />
      </div>
      <MyWatchlists
        className={`${styles.watchlists} ${
          isSidebarOpen ? styles.watchlists_open : styles.watchlists_closed
        }`}
      />
    </div>
  )
}

export default Sidebar
