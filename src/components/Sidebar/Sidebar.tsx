import { useGetUserQuery } from "../../entities/session/api/queries/hooks"
import SidebarLink from "../../entities/sidebar/ui/SidebarLink"
import CreateWatchlistNavButton from "../../features/CreateWatchlist/ui/CreateWatchlistNavButton"
import Loader from "../Loader"
import "./Sidebar.scss"
import UserLink from "./subComponents/UserLink/UserLink"
import WatchlistsList from "./subComponents/WatchlistsList"
import manageSidebarOpening from "./utils/manageSidebarOpening"

type SidebarPropTypes = { className?: string }

function Sidebar({ className }: SidebarPropTypes) {
  manageSidebarOpening()
  const { data: user, isLoading } = useGetUserQuery()

  return (
    <div className={`sidebar ${className}`}>
      <div className="sidebar__top">
        <SidebarLink to="/" className="sidebar__logo-link">
          <h1 className="sidebar__logo">Watchlists</h1>
        </SidebarLink>

        <nav className="sidebar__navigation">
          <SidebarLink
            to="/"
            className="sidebar__navigation-link sidebar__navigation-link_home"
          >
            Home
          </SidebarLink>

          <SidebarLink
            to="/history"
            className="sidebar__navigation-link sidebar__navigation-link_history"
          >
            History
          </SidebarLink>
        </nav>

        <CreateWatchlistNavButton className="sidebar__create-link" />
      </div>

      <div className="sidebar__bottom">
        <p className="sidebar__watchlists-header">My Lists</p>
        {isLoading ? (
          <Loader />
        ) : user ? (
          <WatchlistsList />
        ) : (
          <p>
            <SidebarLink className="sidebar__login-link" to="/login">
              Log in
            </SidebarLink>{" "}
            <span> to see your watchlists</span>
          </p>
        )}
      </div>

      <UserLink to={!user ? "/login" : "/user"} />
    </div>
  )
}

export default Sidebar
