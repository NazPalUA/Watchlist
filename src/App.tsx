import { useCallback, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AppRoutes from "./components/AppRoutes"
import Overlays from "./components/Overlays"

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

  return (
    <>
      <Overlays />
      <AppRoutes />
    </>
  )
}

export default App
