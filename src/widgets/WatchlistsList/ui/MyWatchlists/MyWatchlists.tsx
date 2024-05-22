import { useGetUserQuery } from "../../../../entities/session/api/queries/hooks"
import Loader from "../../../../shared/UI/Loader"
import { List } from "../List/List"
import { NoAuth } from "../NoAuth/NoAuth"
import styles from "./MyWatchlists.module.scss"

export function MyWatchlists() {
  const { data: user, isLoading } = useGetUserQuery()

  const content = user ? <List /> : <NoAuth />

  return (
    <div className={styles.container}>
      <p className={styles.header}>My Lists</p>
      {isLoading ? <Loader /> : content}
    </div>
  )
}
