import { useCallback, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useGetUserQuery } from "../entities/session/api/queries/hooks"
import AddToWatchlistModal from "../features/AddMovieToWatchlist/ui/AddToWatchlistModal/AddToWatchlistModal"
import AppRoutes from "./AppRoutes"
import "./styles/global.scss"

function App() {
  // Handle the link click to scroll to top
  const handleLinkClick = useCallback(() => {
    window.scrollTo(0, 0)
  }, [])

  // Get the current location and scroll to top when location changes
  const { pathname } = useLocation()
  useEffect(() => {
    handleLinkClick()
  }, [pathname, handleLinkClick])

  const { data: currentUser } = useGetUserQuery()

  return (
    <>
      {currentUser && <AddToWatchlistModal />}
      <AppRoutes />
    </>
  )
}

export default App
