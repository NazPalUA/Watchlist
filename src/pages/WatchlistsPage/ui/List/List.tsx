import { useGetWatchlistsQuery } from "../../../../entities/watchlist"
import { ErrorMessage } from "../../../../shared/UI_ref/ErrorMessage"
import Loader from "../../../../shared/UI_ref/Loader"
import { Item } from "../Item/Item"
import styles from "./List.module.scss"

export function List() {
  const {
    data: watchlistsData,
    error,
    isError,
    isLoading,
  } = useGetWatchlistsQuery()

  const watchListsArrHTML = watchlistsData?.map((watchlist) => (
    <li className={styles.item} key={watchlist.id}>
      <Item data={watchlist} />
    </li>
  ))

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return (
      <ErrorMessage error={error}>
        Something went wrong! Please try again later.
      </ErrorMessage>
    )
  }

  return <ul className={styles.container}>{watchListsArrHTML}</ul>
}
