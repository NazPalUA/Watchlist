import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout/Layout"
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
import RequireAuth from "./RequireAuth"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage className="app__page" />} />

        <Route path="user" element={<UserPage className="app__page" />} />

        <Route path="login" element={<LogInPage className="app__page" />} />

        <Route path="signup" element={<SignUpPage className="app__page" />} />

        <Route
          path="search"
          element={<SearchResultsPage className="app__page" />}
        />

        <Route path="movie-page">
          <Route index element={<Navigate to="/" />} />
          <Route
            path=":movieId"
            element={<MoviePage className="app__page" />}
          />
        </Route>

        <Route path="history" element={<HistoryPage className="app__page" />} />

        <Route
          path="create_watchlist"
          element={
            <RequireAuth>
              <CreateWatchlistPage className="app__page" />
            </RequireAuth>
          }
        />

        <Route path="watchlist-page">
          <Route index element={<Navigate to="/" />} />
          <Route
            path=":watchlistId"
            element={
              <RequireAuth>
                <WatchlistPage className="app__page" />
              </RequireAuth>
            }
          />
          <Route
            path=":watchlistId/edit"
            element={<EditWatchlistPage className="app__page" />}
          />
        </Route>

        <Route path="*" element={<h1>Page not found!</h1>} />
      </Route>
    </Routes>
  )
}
