import { useGetWatchlistsDataQuery } from "../../../services/firebase/firestoreObsolete/queries"
import ErrorMessage from "../../ErrorMessage/ErrorMessage"
import SidebarLink from "./SidebarLink"

export default function WatchlistsList() {
  const { data: watchlistsData, error, isError } = useGetWatchlistsDataQuery()

  if (isError) {
    return (
      <ErrorMessage error={error}>
        Something went wrong! Please try again later.
      </ErrorMessage>
    )
  }

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
