import { useSessionQuery } from "../../../../entities/session"
import Loader from "../../../../shared/ui/Loader"
import { List } from "../List/List"
import { NoAuth } from "../NoAuth/NoAuth"
import styles from "./MyWatchlists.module.scss"

type MyWatchlistsProps = {
  style?: React.CSSProperties
}

export function MyWatchlists({ style }: MyWatchlistsProps) {
  const { data: user, isLoading } = useSessionQuery()

  const content = user ? <List /> : <NoAuth />

  return (
    <div style={style} className={styles.container}>
      <p className={styles.header}>My Lists</p>
      {isLoading ? <Loader /> : content}
    </div>
  )
}
