import { NavLinkWithActiveClass } from "../../../../shared/UI/NavLinkWithActiveClass"
import styles from "./NoAuth.module.scss"

export function NoAuth() {
  return (
    <p>
      <NavLinkWithActiveClass className={styles.link} to="/login">
        Log in
      </NavLinkWithActiveClass>{" "}
      <span> to see your watchlists</span>
    </p>
  )
}
