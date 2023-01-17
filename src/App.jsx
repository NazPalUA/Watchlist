import './App.scss'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import HistoryPage from './pages/HistoryPage'
import CreateWatchlistPage from './pages/CreateWatchlistPage'
import WatchlistPage from './pages/WatchlistPage'
import SearchResultsPage from './pages/SearchResultsPage'
import EditWatchlistPage from './pages/EditWatchlistPage'
import MoviePage from './pages/MoviePage'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="app">
      <Sidebar className="app__sidebar" />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage className="app__home-page" />} />
          <Route path="/history" element={<HistoryPage className="app__history-page" />} />
          <Route path="/create_watchlist" element={<CreateWatchlistPage className="app__create-watchlist-page" />} />
          <Route path="/watchlist-page" element={<WatchlistPage className="app__watchlist-page" />} />
          <Route path="/movie-page" element={<MoviePage className="app__movie-page" />} />
          <Route path="/search-results-page" element={<SearchResultsPage className="app__search-results-page" />} />
          <Route path="/edit-watchlist-page" element={<EditWatchlistPage className="app__edit-watchlist-page" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
