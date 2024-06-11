import { CgAddR } from "react-icons/cg"
import { Link } from "react-router-dom"
import { Button } from "../../../../shared/UI_ref/Button"
import { NavLinkWithActiveClass } from "../../../../shared/UI_ref/NavLinkWithActiveClass"
import styles from "./CreateWatchlistNavButton.module.scss"

type CreateWatchlistNavButtonProps = {
  onlyIcon?: boolean
}

export function CreateWatchlistNavButton({
  onlyIcon = false,
}: CreateWatchlistNavButtonProps) {
  return onlyIcon ? (
    <Link to="/create_watchlist">
      <CgAddR className={styles.icon} />
    </Link>
  ) : (
    <NavLinkWithActiveClass to="/create_watchlist" className={styles.link}>
      <Button width="full">+ Create watchlist</Button>
    </NavLinkWithActiveClass>
  )
}
