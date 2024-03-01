import { useUser } from "../../../context/UserContext"
import { useGetWatchlistsDataQuery } from "../../../services/firebase/firestore/queries"
import SidebarLink from "./SidebarLink"

export default function WatchlistsList() {
  const { user } = useUser()
  const userId = user?.uid
  if (!userId) return <div>Not logged in</div>

  const { data: watchlistsData } = useGetWatchlistsDataQuery(userId)

  const watchListsArrHTML = watchlistsData?.map((watchlist) => (
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
