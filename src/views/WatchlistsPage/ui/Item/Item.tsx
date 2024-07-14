import Icon from "@/public/images/watchlist_icon.svg"
import Image from "next/image"
import Link from "next/link"
import type { Watchlist } from "../../../../entities/watchlist"
import styles from "./Item.module.scss"

type ItemProps = {
  data: Watchlist
  className?: string
}

export function Item({ className = "", data }: ItemProps) {
  return (
    <Link
      href={`/watchlists/${data.id}`}
      className={`${styles.link} ${className}`}
    >
      <Image alt={data.name} src={Icon} />
      <span>{data.name}</span>
    </Link>
  )
}
