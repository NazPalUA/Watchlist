import { Navigate, Route, Routes } from "react-router-dom"
import CreateWatchlistPage from "../pages/CreateWatchlistPage/CreateWatchlistPage"
import EditWatchlistPage from "../pages/EditWatchlistPage/EditWatchlistPage"
import HistoryPage from "../pages/HistoryPage/HistoryPage"
import HomePage from "../pages/HomePage/HomePage"
import LogInPage from "../pages/LogInPage/LogInPage"
import MoviePage from "../pages/MoviePage/MoviePage"
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import UserPage from "../pages/UserPage/UserPage"
import WatchlistPage from "../pages/WatchlistPage/WatchlistPage"
import { Layout } from "./Layout"
import RequireAuth from "./RequireAuth"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="user" element={<UserPage />} />

        <Route path="login" element={<LogInPage />} />

        <Route path="signup" element={<SignUpPage />} />

        <Route path="search" element={<SearchResultsPage />} />

        <Route path="movie-page">
          <Route index element={<Navigate to="/" />} />
          <Route path=":movieId" element={<MoviePage />} />
        </Route>

        <Route path="history" element={<HistoryPage />} />

        <Route
          path="create_watchlist"
          element={
            <RequireAuth>
              <CreateWatchlistPage />
            </RequireAuth>
          }
        />

        <Route path="watchlist-page">
          <Route index element={<Navigate to="/" />} />
          <Route
            path=":watchlistId"
            element={
              <RequireAuth>
                <WatchlistPage />
              </RequireAuth>
            }
          />
          <Route path=":watchlistId/edit" element={<EditWatchlistPage />} />
        </Route>

        <Route path="*" element={<h1>Page not found!</h1>} />
      </Route>
    </Routes>
  )
}
