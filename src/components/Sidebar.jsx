import React, { useContext, useEffect, useState }  from "react"
import { Link } from "react-router-dom"
import useWindowSize from "../tools/useWindowSize"
import { nanoid } from "nanoid"
import { WatchlistsContext } from "../context/WatchlistsContext"
import './Sidebar.scss'

export default function Sidebar(props) {

    const {watchlistsArr} = useContext(WatchlistsContext)
    const size = useWindowSize()

    function toggleSidebar() {
        if(size.width < 768) {
            document.body.classList.toggle("open")
            document.body.classList.toggle("closed")
        }
    }

    const watchLists = watchlistsArr.map(watchlist => {
        return (
            <li className="sidebar__watchlist-item"
                key={nanoid()}
            >
                <Link to={`/watchlist-page/${watchlist.id}`}
                    className="sidebar__watchlist-link"
                    onClick={()=>{
                        toggleSidebar()
                    }}
                >
                    {watchlist.name}
                </Link>
            </li>
        )
    })

    return (
        <div className={`sidebar ${props.className ? props.className : ""}`}>
            <div className="sidebar__top">
                <Link to="/" className="sidebar__logo-link">
                    <h1 className="sidebar__logo">
                        Watchlists
                    </h1>
                </Link>
                <nav className="sidebar__navigation">
                    <Link to="/"
                        className="sidebar__navigation-link sidebar__navigation-link_home"
                        onClick={() => {
                            toggleSidebar()
                        }}
                    >
                        Home
                    </Link>
                    <Link to="/history"
                        className="sidebar__navigation-link sidebar__navigation-link_history"
                        onClick={() => {
                            toggleSidebar()
                        }}
                    >
                        History
                    </Link>
                </nav>
                <Link to="/create_watchlist" className="sidebar__create-btn"
                    onClick={() => {
                        toggleSidebar()
                    }}
                >
                    +  Create watchlist
                </Link>
                <p className="sidebar__watchlists-header">
                    My Lists
                </p>
            </div>
            <div className="sidebar__bottom">
                <ul className="sidebar__watchlists">
                    {watchLists}
                </ul>
            </div>
        </div>
    )
}