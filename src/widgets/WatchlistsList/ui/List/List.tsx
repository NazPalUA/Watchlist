import { useGetWatchlistsQuery } from "../../../../entities/watchlist/api/queries/hooks"
import ErrorMessage from "../../../../shared/ui/ErrorMessage/ErrorMessage"
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
        to={`/watchlist-page/${watchlist.id}`}
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
