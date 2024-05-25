import { useSidebarContext } from "../../../../shared/context/SidebarContext"
import Logo from "../../../../shared/ui/Logo/Logo"
import { Burger } from "../Burger/Burger"
import styles from "./HeaderNavbar.module.scss"

export function HeaderNavbar() {
  const { toggleSidebar, isSidebarOpen } = useSidebarContext()

  return (
    <nav className={styles.navbar}>
      <Logo />
      <Burger isOpen={isSidebarOpen} toggle={toggleSidebar} />
    </nav>
  )
}
