import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { useGetUserQuery } from "../entities/session/api/queries/hooks"
import AddToWatchlistModal from "../features/AddMovieToWatchlist/ui/AddToWatchlistModal/AddToWatchlistModal"
import { useSidebarContext } from "../shared/context/SidebarContext"
import { FooterNavbar } from "../widgets/FooterNavbar/ui/FooterNavbar"
import { HeaderNavbar } from "../widgets/HeaderNavbar"
import Sidebar from "../widgets/Sidebar/Sidebar"
import useManageSidebarBasedOnWindowSize from "../widgets/Sidebar/hooks/useManageSidebarBasedOnWindowSize"
import { Layout } from "./Layout/ui/Layout/Layout"

export function App() {
  const { isSidebarOpen } = useSidebarContext()

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
      <Layout
        isSidebarOpen={isSidebarOpen}
        header={<HeaderNavbar />}
        sidebar={<Sidebar />}
        page={<Outlet />}
        footer={<FooterNavbar />}
      />
    </>
  )
}
