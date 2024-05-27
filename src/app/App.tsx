import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { useGetUserQuery } from "../entities/session/api/queries/hooks"
import AddToWatchlistModal from "../features/AddMovieToWatchlist/ui/AddToWatchlistModal/AddToWatchlistModal"
import { useSidebarContext } from "../shared/context/SidebarContext"
import { FooterNavbar } from "../widgets/FooterNavbar/ui/FooterNavbar"
import { HeaderNavbar } from "../widgets/HeaderNavbar"
import Sidebar from "../widgets/Sidebar/Sidebar"
import { Layout } from "./ui/Layout"

export function App() {
  const { isSidebarOpen } = useSidebarContext()

  const { data: currentUser } = useGetUserQuery()
  const { pathname } = useLocation()

  useEffect(() => {
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
