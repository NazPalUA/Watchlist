import React from "react"
import './Burger.scss'

export default function Burger(props) {

    const [isOpen, setIsOpen] = React.useState(false)

    function toggleOpen() {
        setIsOpen(prevState => !prevState)
        console.log(isOpen)
    }

    return (
        <div 
            className={`burger ${props.className} ${isOpen ? "open" : "closed"}`}
            onClick={toggleOpen}
        >
            <div className="burger__bar"></div>
            <div className="burger__bar"></div>
            <div className="burger__bar"></div>
        </div>
    )
}