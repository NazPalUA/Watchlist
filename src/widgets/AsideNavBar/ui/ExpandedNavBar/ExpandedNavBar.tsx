import { useSidebarContext } from "../../../../shared/context"
import { AsideNavLink } from "../../../../shared/ui/AsideNavLink"
import styles from "./ExpandedNavBar.module.scss"
import HistoryIcon from "/images/history_icon.svg"
import HomeIcon from "/images/home_icon.svg"
import WatchlistsIcon from "/images/watchlist_icon.svg"

export function ExpandedNavBar() {
  const { isSidebarOpen } = useSidebarContext()
  return (
    <nav
      className={`${styles.nav} ${
        isSidebarOpen ? styles.nav_show : styles.nav_hide
      } `}
    >
      <AsideNavLink to="/" icon={HomeIcon} text="Home" />
      <AsideNavLink to="/watchlists" icon={WatchlistsIcon} text="Watchlists" />
      <AsideNavLink to="/history" icon={HistoryIcon} text="History" />
    </nav>
  )
}
