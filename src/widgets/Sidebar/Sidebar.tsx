import CreateWatchlistNavButton from "../../features/CreateWatchlist/ui/CreateWatchlistNavButton"
import { useSidebarContext } from "../../shared/context/SidebarContext"
import { Burger } from "../HeaderNavbar/ui/Burger/Burger"
import { NavBar } from "../NavBar"
import { MyWatchlists } from "../WatchlistsList"
import styles from "./Sidebar.module.scss"

function Sidebar() {
  const { toggleSidebar, isSidebarOpen } = useSidebarContext()

  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <Burger isOpen={isSidebarOpen} toggle={toggleSidebar} />
        <NavBar />
        <CreateWatchlistNavButton />
      </div>
      <MyWatchlists />
    </div>
  )
}

export default Sidebar
