import { Button } from "../../../shared/UI/Button/Button"
import { NavLinkWithActiveClass } from "../../../shared/UI/NavLinkWithActiveClass"

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
