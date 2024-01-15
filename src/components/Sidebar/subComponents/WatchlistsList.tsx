import { useWatchlistsContext } from "../../../context/WatchlistsContext"
import SidebarLink from "./SidebarLink"

export default function WatchlistsList() {
    // Get watchlistsArr from WatchlistsContext
    const {watchlistsArr} = useWatchlistsContext() 
    
    const watchListsArrHTML = watchlistsArr.map(watchlist => (
        <li className="sidebar__watchlist-item" key={watchlist.id}>
            <SidebarLink to={`/watchlist-page/${watchlist.id}`} className="sidebar__watchlist-link">
                {watchlist.name}
            </SidebarLink>
        </li>
    ))

    return (
        <ul className="sidebar__watchlists">
            {watchListsArrHTML}
        </ul>
    )            
}