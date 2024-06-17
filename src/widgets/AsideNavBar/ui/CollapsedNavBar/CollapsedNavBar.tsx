import HistoryIcon from "@/public/images/history_icon.svg"
import HomeIcon from "@/public/images/home_icon.svg"
import WatchlistsIcon from "@/public/images/watchlist_icon.svg"
import Image from "next/image"
import Link from "next/link"
import styles from "./CollapsedNavBar.module.scss"

export function CollapsedNavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src={HomeIcon} alt="Hole Link Icon" />
      </Link>
      <Link href="/watchlists">
        <Image src={WatchlistsIcon} alt="Watchlists Link Icon" />
      </Link>
      <Link href="/history">
        <Image src={HistoryIcon} alt="History Link Icon" />
      </Link>
    </nav>
  )
}
