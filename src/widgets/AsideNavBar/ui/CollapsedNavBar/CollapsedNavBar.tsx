import { Link } from "react-router-dom"
import { useSidebarContext } from "../../../../shared/context"
import styles from "./CollapsedNavBar.module.scss"
import HistoryIcon from "/images/history_icon.svg"
import HomeIcon from "/images/home_icon.svg"
import WatchlistsIcon from "/images/watchlist_icon.svg"

export function CollapsedNavBar() {
  const { isSidebarOpen } = useSidebarContext()
  return (
    <nav
      className={`${styles.nav} ${
        isSidebarOpen ? styles.nav_hide : styles.nav_show
      } `}
    >
      <Link to="/">
        <img src={HomeIcon} alt="Hole Link Icon" />
      </Link>
      <Link to="/watchlists">
        <img src={WatchlistsIcon} alt="Watchlists Link Icon" />
      </Link>
      <Link to="/history">
        <img src={HistoryIcon} alt="History Link Icon" />
      </Link>
    </nav>
  )
}
