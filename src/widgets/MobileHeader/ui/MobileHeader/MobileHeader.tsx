import { useSidebarContext } from "../../../../shared/context/SidebarContext"
import Logo from "../../../../shared/UI/Logo/Logo"
import { Burger } from "../Burger/Burger"
import styles from "./MobileHeader.module.scss"

export function MobileHeader() {
  const { toggleSidebar, isSidebarOpen } = useSidebarContext()

  return (
    <nav className={styles.header}>
      <Logo />
      <Burger isOpen={isSidebarOpen} toggle={toggleSidebar} />
    </nav>
  )
}
