"use client"

import Icon from "@/public/images/watchlist_icon.svg"
import { useGetWatchlistsQuery } from "../../../../entities/watchlist"
import { AsideNavLink } from "../../../../shared/ui/AsideNavLink"
import { ErrorMessage } from "../../../../shared/ui/ErrorMessage"
import Loader from "../../../../shared/ui/Loader"
import styles from "./List.module.scss"

export function List() {
  const {
    data: watchlistsData,
    error,
    isError,
    isLoading,
  } = useGetWatchlistsQuery()

  const watchListsArrHTML = watchlistsData?.map(watchlist => (
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
