import { useSessionQuery } from "../../../../entities/session"
import Loader from "../../../../shared/UI_ref/Loader"
import { List } from "../List/List"
import { NoAuth } from "../NoAuth/NoAuth"
import styles from "./MyWatchlists.module.scss"

type MyWatchlistsProps = {
  className?: string
}

export function MyWatchlists({ className = "" }: MyWatchlistsProps) {
  const { data: user, isLoading } = useSessionQuery()

  const content = user ? <List /> : <NoAuth />

  return (
    <div className={`${styles.container} ${className}`.trim()}>
      <p className={styles.header}>My Lists</p>
      {isLoading ? <Loader /> : content}
    </div>
  )
}
