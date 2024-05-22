import { Link } from "react-router-dom"
import { useSidebarContext } from "../../entities/sidebar/SidebarContext"
import Burger from "../../shared/UI/Burger"
import "./MobileHeader.scss"

type MobileHeaderPropTypes = {
  className?: string
}

function MobileHeader({ className }: MobileHeaderPropTypes) {
  const { toggleSidebar, isSidebarOpen } = useSidebarContext()

  return (
    <nav className={`mobile-header ${className}`}>
      <Link to="/" className="mobile-header__logo-link">
        <h1 className="mobile-header__logo">Watchlists</h1>
      </Link>
      <Burger isOpen={isSidebarOpen} toggle={toggleSidebar} />
    </nav>
  )
}

export default MobileHeader