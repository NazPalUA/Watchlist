import { CreateWatchlistNavButton } from "../../../features/CreateWatchlist"
import { NavLinkWithActiveClass } from "../../../shared/ui/NavLinkWithActiveClass"
import styles from "./FooterNavbar.module.scss"

export function FooterNavbar() {
  return (
    <nav className={styles.navbar}>
      <NavLinkWithActiveClass
        to="/watchlists"
        className={`${styles.link} ${styles.link_watchlists}`}
      >
        Watchlists
      </NavLinkWithActiveClass>

      <CreateWatchlistNavButton onlyIcon />

      <NavLinkWithActiveClass
        to="/history"
        className={`${styles.link} ${styles.link_history}`}
      >
        History
      </NavLinkWithActiveClass>
    </nav>
  )
}
