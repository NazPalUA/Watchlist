import { NavLinkWithActiveClass } from "../../../shared/ui/NavLinkWithActiveClass"
import styles from "./AsideNavBar.module.scss"
import HistoryIcon from "/images/history_icon.svg"
import HomeIcon from "/images/home_icon.svg"
import WatchlistsIcon from "/images/watchlist_icon.svg"

type AsideNavBarProps = React.ComponentPropsWithoutRef<"nav">

export function AsideNavBar({ ...rest }: AsideNavBarProps) {
  return (
    <nav {...rest}>
      <NavLinkWithActiveClass
        to="/"
        className={`${styles.link} ${styles.link_home}`}
      >
        <img alt="home" src={HomeIcon} />
        <span>Home</span>
      </NavLinkWithActiveClass>

      <NavLinkWithActiveClass
        to="/watchlists"
        className={`${styles.link} ${styles.link_watchlists}`}
      >
        <img alt="watchlists" src={WatchlistsIcon} />
        <span>Watchlists</span>
      </NavLinkWithActiveClass>

      <NavLinkWithActiveClass
        to="/history"
        className={`${styles.link} ${styles.link_history}`}
      >
        <img alt="history" src={HistoryIcon} />
        <span>History</span>
      </NavLinkWithActiveClass>
    </nav>
  )
}
