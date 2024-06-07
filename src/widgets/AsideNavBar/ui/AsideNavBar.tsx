import { AsideNavLink } from "../../../shared/ui/AsideNavLink"
import HistoryIcon from "/images/history_icon.svg"
import HomeIcon from "/images/home_icon.svg"
import WatchlistsIcon from "/images/watchlist_icon.svg"

type AsideNavBarProps = React.ComponentPropsWithoutRef<"nav">

export function AsideNavBar({ ...rest }: AsideNavBarProps) {
  return (
    <nav {...rest}>
      <AsideNavLink to="/" icon={HomeIcon} text="Home" />
      <AsideNavLink to="/watchlists" icon={WatchlistsIcon} text="Watchlists" />
      <AsideNavLink to="/history" icon={HistoryIcon} text="History" />
    </nav>
  )
}
