import CreateWatchlistNavButton from "../../features/CreateWatchlist/ui/CreateWatchlistNavButton"
import Logo from "../../shared/ui/Logo/Logo"
import { NavBar } from "../NavBar"
import { UserLink } from "../UserLink"
import { MyWatchlists } from "../WatchlistsList"
import "./Sidebar.scss"
import manageSidebarOpening from "./utils/manageSidebarOpening"

type SidebarPropTypes = { className?: string }

function Sidebar({ className }: SidebarPropTypes) {
  manageSidebarOpening()

  return (
    <div className={`sidebar ${className}`}>
      <div className="top-section">
        <Logo hideIfMobile={true} />
        <NavBar />
        <CreateWatchlistNavButton className="sidebar__create-link" />
      </div>
      <MyWatchlists />
      <UserLink />
    </div>
  )
}

export default Sidebar
