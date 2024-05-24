import Container from "../../../../app/Layout/ui/Container/Container"
import { useSidebarContext } from "../../../../shared/context/SidebarContext"
import Logo from "../../../../shared/UI/Logo/Logo"
import { Burger } from "../Burger/Burger"
import styles from "./MobileHeader.module.scss"

export function MobileHeader() {
  const { toggleSidebar, isSidebarOpen } = useSidebarContext()

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
          <Logo />
          <Burger isOpen={isSidebarOpen} toggle={toggleSidebar} />
        </nav>
      </Container>
    </header>
  )
}
