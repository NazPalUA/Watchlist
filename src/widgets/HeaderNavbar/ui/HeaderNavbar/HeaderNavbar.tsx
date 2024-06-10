import { DropdownMenu } from "../DropdownMenu/DropdownMenu"
import Logo from "../Logo/Logo"
import styles from "./HeaderNavbar.module.scss"

export function HeaderNavbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <DropdownMenu />
    </nav>
  )
}
