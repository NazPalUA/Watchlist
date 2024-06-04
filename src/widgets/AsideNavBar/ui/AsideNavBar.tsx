import { NavLinkWithActiveClass } from "../../../shared/ui/NavLinkWithActiveClass"
import styles from "./AsideNavBar.module.scss"

type AsideNavBarProps = React.ComponentPropsWithoutRef<"nav">

export function AsideNavBar({ ...rest }: AsideNavBarProps) {
  return (
    <nav {...rest}>
      <NavLinkWithActiveClass
        to="/"
        className={`${styles.link} ${styles.link_home}`}
      >
        Home
      </NavLinkWithActiveClass>

      <NavLinkWithActiveClass
        to="/watchlists"
        className={`${styles.link} ${styles.link_watchlists}`}
      >
        Watchlists
      </NavLinkWithActiveClass>

      <NavLinkWithActiveClass
        to="/history"
        className={`${styles.link} ${styles.link_history}`}
      >
        History
      </NavLinkWithActiveClass>
    </nav>
  )
}
