import SidebarLink from "./subComponents/SidebarLink"
import manageSidebarOpening from "./utils/manageSidebarOpening"
import WatchlistsList from "./subComponents/WatchListsList"
import './Sidebar.scss'

type SidebarPropTypes = { className?: string }

function Sidebar({className}: SidebarPropTypes) {

    manageSidebarOpening()

    return (
        <div className={`sidebar ${className}`}>
            <div className="sidebar__top">
                <SidebarLink to="/" className="sidebar__logo-link">
                    <h1 className="sidebar__logo">Watchlists</h1>
                </SidebarLink>

                <nav className="sidebar__navigation">
                    <SidebarLink to="/" className="sidebar__navigation-link sidebar__navigation-link_home" >
                        Home
                    </SidebarLink>

                    <SidebarLink to="/history" className="sidebar__navigation-link sidebar__navigation-link_history" >
                        History
                    </SidebarLink>
                </nav>

                <SidebarLink to="/create_watchlist" className="sidebar__create-btn" >
                    +  Create watchlist
                </SidebarLink>
            </div>

            <div className="sidebar__bottom">
                <p className="sidebar__watchlists-header">My Lists</p>
                <WatchlistsList />
            </div>
        </div>
    )
}
    
export default Sidebar