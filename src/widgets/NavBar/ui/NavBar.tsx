import { NavLinkWithActiveClass } from "../../../shared/ui/NavLinkWithActiveClass"
import styles from "./NavBar.module.scss"

type NavBarProps = React.ComponentPropsWithoutRef<"nav">

export function NavBar({ ...rest }: NavBarProps) {
  return (
    <nav {...rest}>
      <NavLinkWithActiveClass
        to="/"
        className={`${styles.link} ${styles.link_home}`}
      >
        Home
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
