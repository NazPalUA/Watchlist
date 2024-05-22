import { useSidebarContext } from "../../entities/sidebar/SidebarContext"
import Burger from "../../shared/UI/Burger"
import Logo from "../../shared/UI/Logo/Logo"
import "./MobileHeader.scss"

type MobileHeaderPropTypes = {
  className?: string
}

function MobileHeader({ className }: MobileHeaderPropTypes) {
  const { toggleSidebar, isSidebarOpen } = useSidebarContext()

  return (
    <nav className={`mobile-header ${className}`}>
      <Logo />
      <Burger isOpen={isSidebarOpen} toggle={toggleSidebar} />
    </nav>
  )
}

export default MobileHeader
