import { Button } from "../../../../shared/ui/Button/Button"
import { NavLinkWithActiveClass } from "../../../../shared/ui/NavLinkWithActiveClass"
import styles from "./CreateWatchlistNavButton.module.scss"

export function CreateWatchlistNavButton() {
  return (
    <NavLinkWithActiveClass to="/create_watchlist" className={styles.link}>
      <Button width="full">+ Create watchlist</Button>
    </NavLinkWithActiveClass>
  )
}
