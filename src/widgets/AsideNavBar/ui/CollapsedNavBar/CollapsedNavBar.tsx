import Link from "next/link"
import styles from "./CollapsedNavBar.module.scss"
import HistoryIcon from "/images/history_icon.svg"
import HomeIcon from "/images/home_icon.svg"
import WatchlistsIcon from "/images/watchlist_icon.svg"

export function CollapsedNavBar() {
  return (
    <nav className={styles.nav}>
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
