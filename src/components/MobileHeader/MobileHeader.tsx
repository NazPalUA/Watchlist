import { Link } from "react-router-dom"
import Burger from "../Burger/Burger"
import './MobileHeader.scss'

type MobileHeaderPropTypes = {
    className?: string
}

function MobileHeader({ className }: MobileHeaderPropTypes) {

    return (
        <nav className={`mobile-header ${className}`}>
            <Link to="/" className="mobile-header__logo-link">
                <h1 className="mobile-header__logo">
                    Watchlists
                </h1>
            </Link>
            <Burger className="mobile-header__burger" />
        </nav>
    )
}

export default MobileHeader