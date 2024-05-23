import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom"
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

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "user", element: <UserPage /> },
      { path: "login", element: <LogInPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "search", element: <SearchResultsPage /> },
      {
        path: "movie-page",
        children: [
          { index: true, element: <Navigate to="/" /> },
          { path: ":movieId", element: <MoviePage /> },
        ],
      },
      { path: "history", element: <HistoryPage /> },
      {
        path: "create_watchlist",
        element: (
          <RequireAuth>
            <CreateWatchlistPage />
          </RequireAuth>
        ),
      },
      {
        path: "watchlist-page",
        children: [
          { index: true, element: <Navigate to="/" /> },
          {
            path: ":watchlistId",
            element: (
              <RequireAuth>
                <WatchlistPage />
              </RequireAuth>
            ),
          },
          {
            path: ":watchlistId/edit",
            element: <EditWatchlistPage />,
          },
        ],
      },
      { path: "*", element: <h1>Page not found!</h1> },
    ],
  },
]

export const router = createBrowserRouter(routes)
