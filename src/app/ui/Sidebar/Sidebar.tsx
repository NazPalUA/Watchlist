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
        <CreateWatchlistNavButton />
      </div>
      <MyWatchlists style={{ display: isSidebarOpen ? "block" : "none" }} />
    </div>
  )
}

export default Sidebar
