import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom"
import CreateWatchlist from "../pages/CreateWatchlistPage"
import EditWatchlist from "../pages/EditWatchlistPage"
import History from "../pages/HistoryPage"
import Home from "../pages/HomePage"
import LogIn from "../pages/LogInPage"
import Movie from "../pages/MoviePage"
import SearchResults from "../pages/SearchResultsPage"
import SignUp from "../pages/SignUpPage"
import User from "../pages/UserPage"
import Watchlist from "../pages/WatchlistPage"
import Watchlists from "../pages/WatchlistsPage"
import App from "./App"
import RequireAuth from "./ui/RequireAuth"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "user", element: <User /> },
      { path: "login", element: <LogIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "search", element: <SearchResults /> },
      {
        path: "movie-page",
        children: [
          { index: true, element: <Navigate to="/" /> },
          { path: ":movieId", element: <Movie /> },
        ],
      },
      { path: "history", element: <History /> },
      {
        path: "create_watchlist",
        element: (
          <RequireAuth>
            <CreateWatchlist />
          </RequireAuth>
        ),
      },
      {
        path: "watchlists",
        children: [
          {
            index: true,
            element: (
              <RequireAuth>
                <Watchlists />
              </RequireAuth>
            ),
          },
          {
            path: ":watchlistId",
            element: (
              <RequireAuth>
                <Watchlist />
              </RequireAuth>
            ),
          },
          {
            path: ":watchlistId/edit",
            element: <EditWatchlist />,
          },
        ],
      },
      { path: "*", element: <h1>Page not found!</h1> },
    ],
  },
]

export const router = createBrowserRouter(routes)
