import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import AppRoutes from "./components/AppRoutes"
import Overlays from "./components/Overlays"

function App() {
  // Handle the link click to scroll to top
  function handleLinkClick() {
    window.scrollTo(0, 0)
  }

  // Get the current location and scroll to top when location changes
  const { pathname } = useLocation()
  useEffect(() => {
    handleLinkClick()
  }, [pathname])

  // Add event listener for all links to handle click and scroll to top (it needs to make sure that scroll to top happens even if link lead to the current location)
  document
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", handleLinkClick))

  return (
    <>
      <Overlays />
      <AppRoutes />
    </>
  )
}

export default App
