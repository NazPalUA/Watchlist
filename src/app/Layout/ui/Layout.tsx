import { useCallback, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { useGetUserQuery } from "../../../entities/session/api/queries/hooks"
import AddToWatchlistModal from "../../../features/AddMovieToWatchlist/ui/AddToWatchlistModal/AddToWatchlistModal"
import { useSidebarContext } from "../../../shared/context/SidebarContext"
import { MobileHeader } from "../../../widgets/MobileHeader"
import Sidebar from "../../../widgets/Sidebar/Sidebar"
import useManageSidebarBasedOnWindowSize from "../../../widgets/Sidebar/hooks/useManageSidebarBasedOnWindowSize"
import "./Layout.scss"

export function Layout() {
  const { getSidebarStateClass } = useSidebarContext()

  const { data: currentUser } = useGetUserQuery()
  const location = useLocation()
  const { closeSidebarIfMobile } = useManageSidebarBasedOnWindowSize()

  useEffect(() => {
    closeSidebarIfMobile()
  }, [location.pathname])

  // Handle the link click to scroll to top
  const handleLinkClick = useCallback(() => {
    window.scrollTo(0, 0)
  }, [])

  // Get the current location and scroll to top when location changes
  const { pathname } = useLocation()
  useEffect(() => {
    handleLinkClick()
  }, [pathname, handleLinkClick])
  return (
    <>
      {currentUser && <AddToWatchlistModal />}
      <div className={`app app--${getSidebarStateClass()}`}>
        <header className="app__header">
          <div className="app__container">
            <MobileHeader />
          </div>
        </header>
        <main className="app__main">
          <div className="app__container app__main-wrapper" id="container">
            <section
              className="app__main-section app__main-section_sidebar"
              id="sidebar"
            >
              <Sidebar className="app__sidebar" />
            </section>
            <section className="app__main-section app__main-section_page">
              <Outlet />
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
