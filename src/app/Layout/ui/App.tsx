import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { useGetUserQuery } from "../../../entities/session/api/queries/hooks"
import AddToWatchlistModal from "../../../features/AddMovieToWatchlist/ui/AddToWatchlistModal/AddToWatchlistModal"
import { useSidebarContext } from "../../../shared/context/SidebarContext"
import { HeaderNavbar } from "../../../widgets/HeaderNavbar"
import Sidebar from "../../../widgets/Sidebar/Sidebar"
import useManageSidebarBasedOnWindowSize from "../../../widgets/Sidebar/hooks/useManageSidebarBasedOnWindowSize"
import "./App.scss"
import Container from "./Container/Container"

export function App() {
  const { getSidebarStateClass } = useSidebarContext()

  const { data: currentUser } = useGetUserQuery()
  const { pathname } = useLocation()
  const { closeSidebarIfMobile } = useManageSidebarBasedOnWindowSize()

  useEffect(() => {
    closeSidebarIfMobile()
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {currentUser && <AddToWatchlistModal />}
      <div className={`app app--${getSidebarStateClass()}`}>
        <header className="app__header">
          <Container>
            <HeaderNavbar />
          </Container>
        </header>
        <main className="app__main">
          <Container className="app__main-wrapper">
            <aside className="app__main-section_sidebar" id="sidebar">
              <Sidebar className="app__sidebar" />
            </aside>
            <section className="app__main-section_page">
              <Outlet />
            </section>
          </Container>
        </main>
      </div>
    </>
  )
}
