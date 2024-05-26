import Logo from "../../../../shared/ui/Logo/Logo"
import { UserLink } from "../../../UserLink"
import styles from "./HeaderNavbar.module.scss"

export function HeaderNavbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <UserLink />
    </nav>
  )
}
