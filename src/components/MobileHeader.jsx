import React from "react"
import { Link } from "react-router-dom"
import Burger from "./Burger"
import './MobileHeader.scss'

export default function MobileHeader(props) {

    return (
        <header className={`mobile-header ${props.className}`}>
            <Link to="/" className="mobile-header__logo-link">
                <h1 className="mobile-header__logo">
                    Watchlists
                </h1>
            </Link>
            <Burger className="mobile-header__burger"/>
        </header>
    )
}