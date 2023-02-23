import React, {useContext, useEffect} from "react"
import './App.scss'
import { Routes, Route, useLocation } from "react-router-dom"
import { ModalContext } from "./context/ModalContext"
import HomePage from './pages/HomePage'
import HistoryPage from './pages/HistoryPage'
import CreateWatchlistPage from './pages/CreateWatchlistPage'
import WatchlistPage from './pages/WatchlistPage'
import SearchResultsPage from './pages/SearchResultsPage'
import EditWatchlistPage from './pages/EditWatchlistPage'
import MyListsPage from './pages/MyListsPage'
import MoviePage from './pages/MoviePage'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import Modal from './components/Modal'
import AddToWatchlist from './components/AddToWatchlist'


function App() {

	const {isModalActive, setIsModalActive} = useContext(ModalContext)

	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<div className="app">
			<header className="app__header">
				<div className="app__container">
					<MobileHeader />
				</div>
			</header>
			<main className="app__main">
				<div className="app__container app__main-wrapper" id="container">
					<section className="app__main-section app__main-section_sidebar" id="sidebar">
						<Sidebar className="app__sidebar" />
					</section>
					<section className="app__main-section app__main-section_page">
						<Routes>
							<Route path="/" element={<HomePage className="app__page" />} />
							<Route path="/history" element={<HistoryPage className="app__page" />} />
							<Route path="/my-lists" element={<MyListsPage className="app__page" />} />
							<Route path="/create_watchlist" element={<CreateWatchlistPage className="app__page" />} />
							<Route path="/watchlist-page/:watchlistId" element={<WatchlistPage className="app__page" />} />
							<Route path="/movie-page/:movieId" element={<MoviePage className="app__page" />} />
							<Route path="/search-results-page/:searchText" element={<SearchResultsPage className="app__page" />} />
							<Route path="/edit-watchlist-page/:watchlistId" element={<EditWatchlistPage className="app__page" />} />
						</Routes>
					</section>
				</div>
			</main>
			<Modal active={isModalActive} setActive={setIsModalActive}>
				<AddToWatchlist />
			</Modal>
		</div>
	)
}

export default App
