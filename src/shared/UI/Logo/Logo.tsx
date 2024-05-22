import { Link } from "react-router-dom"
import styles from "./Logo.module.scss"

type LogoProps = {
  hideIfMobile?: boolean
}

export default function ({ hideIfMobile }: LogoProps) {
  return (
    <Link to="/" className={hideIfMobile ? styles.hideIfMobile : ""}>
      <h1 className={styles.logo}>Watchlists</h1>
    </Link>
  )
}
