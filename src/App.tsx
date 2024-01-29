import { useEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import "./App.scss"
import Layout from "./Layout"
import CreateWatchlistPage from "./pages/CreateWatchlistPage/CreateWatchlistPage"
import EditWatchlistPage from "./pages/EditWatchlistPage"
import HistoryPage from "./pages/HistoryPage"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage/MoviePage"
import WatchlistPage from "./pages/WatchlistPage/WatchlistPage"

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage className="app__page" />} />
          <Route
            path="history"
            element={<HistoryPage className="app__page" />}
          />
          <Route
            path="create_watchlist"
            element={<CreateWatchlistPage className="app__page" />}
          />
          <Route path="watchlist-page" element={<Navigate to="/" />} />
          <Route
            path="watchlist-page/:watchlistId"
            element={<WatchlistPage className="app__page" />}
          />
          <Route
            path="watchlist-page/:watchlistId/edit"
            element={<EditWatchlistPage className="app__page" />}
          />
          <Route path="movie-page" element={<Navigate to="/" />} />
          <Route
            path="movie-page/:movieId"
            element={<MoviePage className="app__page" />}
          />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
