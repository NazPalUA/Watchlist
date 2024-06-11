import { CgAddR } from "react-icons/cg"
import { Link } from "react-router-dom"
import { Button } from "../../../../shared/ui/Button"
import { NavLinkWithActiveClass } from "../../../../shared/ui/NavLinkWithActiveClass"
import styles from "./CreateWatchlistNavButton.module.scss"

type CreateWatchlistNavButtonProps = {
  onlyIcon?: boolean
}

export function CreateWatchlistNavButton({
  onlyIcon = false,
}: CreateWatchlistNavButtonProps) {
  return (
    <>
      <Link
        to="/create_watchlist"
        className={`${styles.IconLink} ${
          onlyIcon ? styles.IconLink_show : styles.IconLink_hide
        }`}
      >
        <CgAddR className={styles.icon} />
      </Link>

      <NavLinkWithActiveClass
        to="/create_watchlist"
        className={`${styles.link} ${
          onlyIcon ? styles.link_hide : styles.link_show
        }`}
      >
        <Button width="full">+ Create watchlist</Button>
      </NavLinkWithActiveClass>
    </>
  )
}
