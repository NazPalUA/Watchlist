import HistoryIcon from "@/public/images/history_icon.svg"
import HomeIcon from "@/public/images/home_icon.svg"
import WatchlistsIcon from "@/public/images/watchlist_icon.svg"
import { AsideNavLink } from "../../../shared/ui/AsideNavLink"

export function ExpandedNavBar() {
  return (
    <nav>
      <AsideNavLink to="/" icon={HomeIcon} text="Home" />
      <AsideNavLink to="/watchlists" icon={WatchlistsIcon} text="Watchlists" />
      <AsideNavLink to="/history" icon={HistoryIcon} text="History" />
    </nav>
  )
}
