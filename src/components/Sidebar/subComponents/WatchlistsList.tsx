import { useState } from "react"
import {
  useWatchlist,
  WatchlistsData,
} from "../../../context/WatchlistsContext"
import SidebarLink from "./SidebarLink"

export default function WatchlistsList() {
  const [watchlistsData, setWatchlistsData] = useState<WatchlistsData>([])

  const { getWatchlistsData } = useWatchlist()
  getWatchlistsData().then((data) => setWatchlistsData(data))

  const watchListsArrHTML = watchlistsData.map((watchlist) => (
    <li className="sidebar__watchlist-item" key={watchlist.id}>
      <SidebarLink
        to={`/watchlist-page/${watchlist.id}`}
        className="sidebar__watchlist-link"
      >
        {watchlist.name}
      </SidebarLink>
    </li>
  ))

  return <ul className="sidebar__watchlists">{watchListsArrHTML}</ul>
}
