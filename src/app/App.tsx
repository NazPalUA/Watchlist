"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { useSessionQuery } from "../entities/session"
import { AddToWatchlistModal } from "../features/AddMovieToWatchlist"
import { useSidebarContext } from "../shared/context"
import { FooterNavbar } from "../widgets/FooterNavbar"
import { HeaderNavbar } from "../widgets/HeaderNavbar"
import { AppLayout } from "./ui/AppLayout"
import Sidebar from "./ui/Sidebar/Sidebar"

type AppProps = {
  children: React.ReactNode
}

export default function App({ children }: AppProps) {
  const { isSidebarOpen } = useSidebarContext()

  const { data: currentUser } = useSessionQuery()
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {currentUser && <AddToWatchlistModal />}
      <AppLayout
        isSidebarOpen={isSidebarOpen}
        header={<HeaderNavbar />}
        sidebar={<Sidebar />}
        page={children}
        footer={<FooterNavbar />}
      />
    </>
  )
}
