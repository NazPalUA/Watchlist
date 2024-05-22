import { useGetUserQuery } from "../../entities/session/api/queries/hooks"
import CreateWatchlistNavButton from "../../features/CreateWatchlist/ui/CreateWatchlistNavButton"
import Loader from "../../shared/UI/Loader"
import { NavLinkWithActiveClass } from "../../shared/UI/NavLinkWithActiveClass"
import { WatchlistsList } from "../WatchlistsList"
import "./Sidebar.scss"
import UserLink from "./ui/UserLink/UserLink"
import manageSidebarOpening from "./utils/manageSidebarOpening"

type SidebarPropTypes = { className?: string }

function Sidebar({ className }: SidebarPropTypes) {
  manageSidebarOpening()
  const { data: user, isLoading } = useGetUserQuery()

  return (
    <div className={`sidebar ${className}`}>
      <div className="sidebar__top">
        <NavLinkWithActiveClass to="/" className="sidebar__logo-link">
          <h1 className="sidebar__logo">Watchlists</h1>
        </NavLinkWithActiveClass>

        <nav className="sidebar__navigation">
          <NavLinkWithActiveClass
            to="/"
            className="sidebar__navigation-link sidebar__navigation-link_home"
          >
            Home
          </NavLinkWithActiveClass>

          <NavLinkWithActiveClass
            to="/history"
            className="sidebar__navigation-link sidebar__navigation-link_history"
          >
            History
          </NavLinkWithActiveClass>
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
            <NavLinkWithActiveClass className="sidebar__login-link" to="/login">
              Log in
            </NavLinkWithActiveClass>{" "}
            <span> to see your watchlists</span>
          </p>
        )}
      </div>

      <UserLink to={!user ? "/login" : "/user"} />
    </div>
  )
}

export default Sidebar
