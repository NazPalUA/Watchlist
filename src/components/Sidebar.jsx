import React from "react"
import './Sidebar.scss'

export default function Sidebar(props) {

    return (
        <aside className={`sidebar ${props.className}`}>
            <div className="sidebar__top">
                <h1 className="sidebar__logo">
                    Watchlists
                </h1>
                <nav className="sidebar__navigation">
                    <a 
                        className="sidebar__navigation-link sidebar__navigation-link_home">
                        Home
                    </a>
                    <a 
                        className="sidebar__navigation-link sidebar__navigation-link_history">
                        History
                    </a>
                </nav>
                <button className="sidebar__create-btn">
                    +  Create watchlist
                </button>
                <p className="sidebar__watchlists-header">
                    My Lists
                </p>
            </div>
            <div className="sidebar__bottom">
                <ul className="sidebar__watchlists">
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise rgher er r5 e yy5 y5 45y 54 y54  5y45y 5y 54y54y54rh 56hy54 
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                    <li className="sidebar__watchlist-item">
                        Movies by Tom Cruise
                    </li>
                </ul>
            </div>
        </aside>
    )
}