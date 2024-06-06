import { useGetWatchlistsQuery } from "../../../../entities/watchlist"
import { ErrorMessage } from "../../../../shared/ui/ErrorMessage"
import Loader from "../../../../shared/ui/Loader"
import { NavLinkWithActiveClass } from "../../../../shared/ui/NavLinkWithActiveClass"
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
      <NavLinkWithActiveClass
        to={`/watchlists/${watchlist.id}`}
        className={styles.link}
      >
        {watchlist.name}
      </NavLinkWithActiveClass>
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
