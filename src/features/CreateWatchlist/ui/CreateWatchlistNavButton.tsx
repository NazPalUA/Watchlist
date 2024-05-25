import { Button } from "../../../shared/ui/Button/Button"
import { NavLinkWithActiveClass } from "../../../shared/ui/NavLinkWithActiveClass"

type CreateWatchlistNavButtonProps = { className?: string }

export default function CreateWatchlistNavButton({
  className,
}: CreateWatchlistNavButtonProps) {
  return (
    <NavLinkWithActiveClass to="/create_watchlist" className={className || ""}>
      <Button width="full">+ Create watchlist</Button>
    </NavLinkWithActiveClass>
  )
}
