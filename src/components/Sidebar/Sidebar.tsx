import { useGetUserQuery } from "../../services/firebase/auth/queries"
import { Button } from "../../shared/UI/Button/Button"
import CustomLoader from "../CustomLoader"
import "./Sidebar.scss"
import SidebarLink from "./subComponents/SidebarLink"
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

        <SidebarLink to="/create_watchlist" className="sidebar__create-link">
          <Button width="full">+ Create watchlist</Button>
        </SidebarLink>
      </div>

      <div className="sidebar__bottom">
        <p className="sidebar__watchlists-header">My Lists</p>
        {isLoading ? (
          <CustomLoader />
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
