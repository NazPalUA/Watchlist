import { useContext }  from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import { WatchlistsContext, WatchlistsContextType } from "../context/WatchlistsContext"
import useWindowSize from "../hooks/useWindowSize"
import './Sidebar.scss'

type SidebarPropTypes = {
    className?: string
}

type WindowSize = {
    width: number | undefined
    height: number | undefined
}

function Sidebar({className}: SidebarPropTypes) {
    // Get watchlistsArr from WatchlistsContext
    const {watchlistsArr} = useContext(WatchlistsContext) as WatchlistsContextType

    // Get window size using the useWindowSize hook
    const size: WindowSize  = useWindowSize()

    // Function for opening/closing the sidebar menu
    function toggleSidebar() {
        if(size.width && size.width < 768) {
            document.body.classList.toggle("open")
            document.body.classList.toggle("closed")
        }
    }

    const watchListsArrHTML = watchlistsArr.map(watchlist => {
        return (
            <li className="sidebar__watchlist-item"
                key={nanoid()}
            >
                <Link to={`/watchlist-page/${watchlist.id}`}
                    className="sidebar__watchlist-link"
                    onClick={()=>{
                        toggleSidebar()
                    }}
                >
                    {watchlist.name}
                </Link>
            </li>
        )
    })

    return (
        <div className={`sidebar ${className}`}>
            <div className="sidebar__top">
                <Link to="/" className="sidebar__logo-link">
                    <h1 className="sidebar__logo">
                        Watchlists
                    </h1>
                </Link>
                <nav className="sidebar__navigation">
                    <Link to="/"
                        className="sidebar__navigation-link sidebar__navigation-link_home"
                        onClick={() => {
                            toggleSidebar()
                        }}
                    >
                        Home
                    </Link>
                    <Link to="/history"
                        className="sidebar__navigation-link sidebar__navigation-link_history"
                        onClick={() => {
                            toggleSidebar()
                        }}
                    >
                        History
                    </Link>
                </nav>
                <Link to="/create_watchlist" className="sidebar__create-btn"
                    onClick={() => {
                        toggleSidebar()
                    }}
                >
                    +  Create watchlist
                </Link>
                <p className="sidebar__watchlists-header">
                    My Lists
                </p>
            </div>
            <div className="sidebar__bottom">
                <ul className="sidebar__watchlists">
                    {watchListsArrHTML}
                </ul>
            </div>
        </div>
    )
}
    
export default Sidebar