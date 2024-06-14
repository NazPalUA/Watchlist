"use client"

import { CreateWatchlistNavButton } from "../../../features/CreateWatchlist"
import { useSidebarContext } from "../../../shared/context"
import { AsideNavBar } from "../../../widgets/AsideNavBar"
import { MyWatchlists } from "../../../widgets/WatchlistsList"
import styles from "./Sidebar.module.scss"

function Sidebar() {
  const { isSidebarOpen } = useSidebarContext()
  const initiallyShownClass = `${styles.initiallyShown} ${
    isSidebarOpen ? styles.closed : styles.open
  }`
  const initiallyHiddenClass = `${styles.initiallyHidden} ${
    isSidebarOpen ? styles.open : styles.closed
  }`
  return (
    <div className={styles.sidebar}>
      <div className={initiallyShownClass}>
        <AsideNavBar type="collapsed" />
        <CreateWatchlistNavButton onlyIcon={true} />
      </div>
      <div className={initiallyHiddenClass}>
        <AsideNavBar type="expanded" />
        <CreateWatchlistNavButton onlyIcon={false} />
      </div>
      <MyWatchlists className={initiallyHiddenClass} />
    </div>
  )
}

export default Sidebar
