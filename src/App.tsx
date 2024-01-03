import {useEffect} from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from './pages/HomePage'
import HistoryPage from './pages/HistoryPage'
import CreateWatchlistPage from './pages/CreateWatchlistPage'
import WatchlistPage from './pages/WatchlistPage'
import SearchResultsPage from './pages/SearchResultsPage'
import EditWatchlistPage from './pages/EditWatchlistPage'
import MoviePage from './pages/MoviePage'
import Layout from "./Layout"
import './App.scss'


function App() {

	// Handle the link click to scroll to top
	function handleLinkClick() {
		window.scrollTo(0, 0)
	}
	
	// Get the current location and scroll to top when location changes
	const { pathname } = useLocation()
	useEffect(() => {handleLinkClick()}, [pathname])

	// Add event listener for all links to handle click and scroll to top (it needs to make sure that scroll to top happens even if link lead to the current location)
	document.querySelectorAll("a").forEach(link => link.addEventListener("click", handleLinkClick))

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage className="app__page" />} />
					<Route path="history" element={<HistoryPage className="app__page" />} />
					<Route path="create_watchlist" element={<CreateWatchlistPage className="app__page" />} />
					<Route path="watchlist-page/:watchlistId" element={<WatchlistPage className="app__page" />} />
					<Route path="movie-page/:movieId" element={<MoviePage className="app__page" />} />
					<Route path="search-results-page/:searchText" element={<SearchResultsPage className="app__page" />} />
					<Route path="edit-watchlist-page/:watchlistId" element={<EditWatchlistPage className="app__page" />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
