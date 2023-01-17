import React from "react"
import { Link } from "react-router-dom"
import './MyListsPage.scss'

export default function MyListsPage(props) {
    return (
        <div className={`my-lists-page ${props.className}`}>
            <Link to="/create_watchlist" className="my-lists-page__create-btn">
                +  Create watchlist
            </Link>
            <p className="my-lists-page__header">
                My Lists
            </p>
            <ul className="my-lists-page__watchlists">
                <li className="my-lists-page__watchlist-item">
                    <Link to="/watchlist-page"
                        className="my-lists-page__watchlist-link">
                        Movies by Tom Cruise thrt trhgrt rrtrrrrrr rrrrrrrrrrrr rrrrrrrtrrrrr rrrrrrrrr rrrrrrrrrrtrrrrrrr rrrrrrrrrrrrrrrrrrt rrrrrrrrrrrrrrrrrr rrrrrrrtrrrrrr rrrrrrrrrrrrrrrrrr
                    </Link>
                </li>
                <li className="my-lists-page__watchlist-item">
                    <Link to="/watchlist-page"
                        className="my-lists-page__watchlist-link">
                        Movies by Tom Cruise
                    </Link>
                </li>
                <li className="my-lists-page__watchlist-item">
                    <Link to="/watchlist-page"
                        className="my-lists-page__watchlist-link">
                        Movies by Tom Cruise
                    </Link>
                </li>
                <li className="my-lists-page__watchlist-item">
                    <Link to="/watchlist-page"
                        className="my-lists-page__watchlist-link">
                        Movies by Tom Cruise
                    </Link>
                </li>
                <li className="my-lists-page__watchlist-item">
                    <Link to="/watchlist-page"
                        className="my-lists-page__watchlist-link">
                        Movies by Tom Cruise
                    </Link>
                </li>
                <li className="my-lists-page__watchlist-item">
                    <Link to="/watchlist-page"
                        className="my-lists-page__watchlist-link">
                        Movies by Tom Cruise
                    </Link>
                </li>
            </ul>
        </div>
    )
}