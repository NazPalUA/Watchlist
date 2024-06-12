import { Link } from "react-router-dom"
import styles from "./Logo.module.scss"

export default function () {
  return (
    <Link to="/">
      <h1 className={styles.logo}>Watchlists</h1>
    </Link>
  )
}
