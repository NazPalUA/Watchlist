import React from "react"
import './Burger.scss'

export default function Burger(props) {

    const [isOpen, setIsOpen] = React.useState(false)

    // const sidebar = document.getElementById('sidebar')
    React.useEffect(() => {
        const sidebar = document.getElementById('sidebar')
    })

    function toggleOpen() {
        setIsOpen(prevState => !prevState)
        console.log(isOpen)
        sidebar.classList.toggle("open")
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