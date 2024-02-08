import { Navigate, Route, Routes } from "react-router-dom"
import CreateWatchlistPage from "../pages/CreateWatchlistPage/CreateWatchlistPage"
import EditWatchlistPage from "../pages/EditWatchlistPage/EditWatchlistPage"
import HistoryPage from "../pages/HistoryPage/HistoryPage"
import HomePage from "../pages/HomePage/HomePage"
import MoviePage from "../pages/MoviePage/MoviePage"
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage"
import UserPage from "../pages/UserPage/UserPage"
import WatchlistPage from "../pages/WatchlistPage/WatchlistPage"
import Layout from "./Layout/Layout"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage className="app__page" />} />

        <Route path="user" element={<UserPage className="app__page" />} />

        <Route
          path="search"
          element={<SearchResultsPage className="app__page" />}
        />

        <Route path="history" element={<HistoryPage className="app__page" />} />

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
  )
}
