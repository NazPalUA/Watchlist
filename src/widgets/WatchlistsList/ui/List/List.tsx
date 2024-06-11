import { useGetWatchlistsQuery } from "../../../../entities/watchlist"
import { AsideNavLink } from "../../../../shared/UI_ref/AsideNavLink"
import { ErrorMessage } from "../../../../shared/UI_ref/ErrorMessage"
import Loader from "../../../../shared/UI_ref/Loader"
import styles from "./List.module.scss"
import Icon from "/images/watchlist_icon.svg"

export function List() {
  const {
    data: watchlistsData,
    error,
    isError,
    isLoading,
  } = useGetWatchlistsQuery()

  const watchListsArrHTML = watchlistsData?.map((watchlist) => (
    <li className={styles.item} key={watchlist.id}>
      <AsideNavLink
        style={{ margin: 0 }}
        to={`/watchlists/${watchlist.id}`}
        icon={Icon}
        text={watchlist.name}
      />
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
