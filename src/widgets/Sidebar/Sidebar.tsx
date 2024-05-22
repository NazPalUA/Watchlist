import { useGetUserQuery } from "../../entities/session/api/queries/hooks"
import CreateWatchlistNavButton from "../../features/CreateWatchlist/ui/CreateWatchlistNavButton"
import Logo from "../../shared/UI/Logo/Logo"
import { NavBar } from "../NavBar"
import { MyWatchlists } from "../WatchlistsList"
import "./Sidebar.scss"
import UserLink from "./ui/UserLink/UserLink"
import manageSidebarOpening from "./utils/manageSidebarOpening"

type SidebarPropTypes = { className?: string }

function Sidebar({ className }: SidebarPropTypes) {
  manageSidebarOpening()
  const { data: user } = useGetUserQuery()

  return (
    <div className={`sidebar ${className}`}>
      <div className="top-section">
        <Logo hideIfMobile={true} />
        <NavBar />
        <CreateWatchlistNavButton className="sidebar__create-link" />
      </div>
      <MyWatchlists />
      <UserLink to={!user ? "/login" : "/user"} />
    </div>
  )
}

export default Sidebar
