import './App.scss'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import HistoryPage from './pages/HistoryPage'
import CreateWatchlistPage from './pages/CreateWatchlistPage'
import WatchlistPage from './pages/WatchlistPage'
import SearchResultsPage from './pages/SearchResultsPage'
import MoviePage from './pages/MoviePage'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="App">
      <Sidebar className="App__sidebar" />
      <Routes>
        <Route path="/" element={<HomePage className="App__home" />} />
        <Route path="/history" element={<HistoryPage className="App__history" />} />
        <Route path="/create_watchlist" element={<CreateWatchlistPage className="App__create-watchlist" />} />
        <Route path="/watchlist-page" element={<WatchlistPage className="App__watchlist-page" />} />
        <Route path="/movie-page" element={<MoviePage className="App__movie-page" />} />
        <Route path="/search-results-page" element={<SearchResultsPage className="App__search-results-page" />} />
      </Routes>
    </div>
  )
}

export default App
