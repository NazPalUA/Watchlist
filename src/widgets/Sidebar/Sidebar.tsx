import { useGetUserQuery } from "../../entities/session/api/queries/hooks"
import CreateWatchlistNavButton from "../../features/CreateWatchlist/ui/CreateWatchlistNavButton"
import { NavLinkWithActiveClass } from "../../shared/UI/NavLinkWithActiveClass"
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
      <div>
        <NavLinkWithActiveClass to="/" className="sidebar__logo-link">
          <h1 className="sidebar__logo">Watchlists</h1>
        </NavLinkWithActiveClass>
        <NavBar />
        <CreateWatchlistNavButton className="sidebar__create-link" />
      </div>
      <MyWatchlists />
      <UserLink to={!user ? "/login" : "/user"} />
    </div>
  )
}

export default Sidebar
