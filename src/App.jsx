import './App.scss'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import History from './pages/History'
import CreateWatchlist from './pages/CreateWatchlist'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="App">
      <Sidebar className="App__sidebar" />
      <Routes>
        <Route path="/" element={<Home className="App__home" />} />
        <Route path="/history" element={<History className="App__history" />} />
        <Route path="/create_watchlist" element={<CreateWatchlist className="App__create-watchlist" />} />
      </Routes>
    </div>
  )
}

export default App
