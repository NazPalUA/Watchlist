import { Link } from "react-router-dom"
import type { Watchlist } from "../../../../entities/watchlist"
import styles from "./Item.module.scss"
import Icon from "/images/watchlist_icon.svg"

type ItemProps = {
  data: Watchlist
  className?: string
}

export function Item({ className = "", data }: ItemProps) {
  return (
    <Link
      to={`/watchlists/${data.id}`}
      className={`${styles.link} ${className}`}
    >
      <img alt={data.name} src={Icon} />
      <span>{data.name}</span>
    </Link>
  )
}
