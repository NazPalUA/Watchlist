import { useCallback, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AddToWatchlistModal from "./components/AddToWatchlistModal/AddToWatchlistModal"
import AppRoutes from "./components/AppRoutes"
import { useGetUserQuery } from "./services/firebase/auth/queries"

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
