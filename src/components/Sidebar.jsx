import React from "react"
import { Link } from "react-router-dom"
import './Sidebar.scss'

export default function Sidebar(props) {

    return (
        <aside className={`sidebar ${props.className}`}>
            <div className="sidebar__top">
                <Link to="/" className="sidebar__logo-link">
                    <h1 className="sidebar__logo">
                        Watchlists
                    </h1>
                </Link>
                <nav className="sidebar__navigation">
                    <Link to="/"
                        className="sidebar__navigation-link sidebar__navigation-link_home">
                        Home
                    </Link>
                    <Link to="/history"
                        className="sidebar__navigation-link sidebar__navigation-link_history">
                        History
                    </Link>
                </nav>
                <Link to="/create_watchlist" className="sidebar__create-btn">
                    +  Create watchlist
                </Link>
                <p className="sidebar__watchlists-header">
                    My Lists
                </p>
            </div>
            <div className="sidebar__bottom">
                <ul className="sidebar__watchlists">
                    <li className="sidebar__watchlist-item">
                        <Link to="/watchlist-page"
                            className="sidebar__watchlist-link">
                            Movies by Tom Cruise
                        </Link>
                    </li>
                    <li className="sidebar__watchlist-item">
                        <Link to="/watchlist-page"
                            className="sidebar__watchlist-link">
                            Movies by Tom Cruise
                        </Link>
                    </li>
                    <li className="sidebar__watchlist-item">
                        <Link to="/watchlist-page"
                            className="sidebar__watchlist-link">
                            Movies by Tom Cruise
                        </Link>
                    </li>
                    <li className="sidebar__watchlist-item">
                        <Link to="/watchlist-page"
                            className="sidebar__watchlist-link">
                            Movies by Tom Cruise
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}