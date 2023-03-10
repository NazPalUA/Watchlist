import React from "react"
import { Link } from "react-router-dom"
import Burger from "./Burger"
import './MobileHeader.scss'

function MobileHeader(props) {

    return (
        <nav className={`mobile-header ${props.className}`}>
            <Link to="/" className="mobile-header__logo-link">
                <h1 className="mobile-header__logo">
                    Watchlists
                </h1>
            </Link>
            <Burger className="mobile-header__burger"/>
        </nav>
    )
}

MobileHeader.defaultProps = {
    className: ""
}

export default MobileHeader