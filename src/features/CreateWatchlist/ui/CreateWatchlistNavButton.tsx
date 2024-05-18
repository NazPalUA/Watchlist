import SidebarLink from "../../../entities/sidebar/ui/SidebarLink"
import { Button } from "../../../shared/UI/Button/Button"

type CreateWatchlistNavButtonProps = { className?: string }

export default function CreateWatchlistNavButton({
  className,
}: CreateWatchlistNavButtonProps) {
  return (
    <SidebarLink to="/create_watchlist" className={className || ""}>
      <Button width="full">+ Create watchlist</Button>
    </SidebarLink>
  )
}
