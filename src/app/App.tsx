"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useSessionQuery } from "../entities/session"
import { AddToWatchlistModal } from "../features/AddMovieToWatchlist"
import { useSidebarContext } from "../shared/context"
import { FooterNavbar } from "../widgets/FooterNavbar"
import { HeaderNavbar } from "../widgets/HeaderNavbar"
import { Layout } from "./ui/Layout"
import Sidebar from "./ui/Sidebar/Sidebar"

export default function App() {
  const { isSidebarOpen } = useSidebarContext()

  const { data: currentUser } = useSessionQuery()
  const pathname = usePathname()

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
