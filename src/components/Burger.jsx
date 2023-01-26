import React from "react"
import './Burger.scss'

export default function Burger(props) {

    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        const sidebar = document.getElementById('sidebar')
    }, [])



    function toggleOpen() {
        setIsOpen(prevState => !prevState)
        sidebar.classList.toggle("open")
        sidebar.parentElement.classList.toggle("open")
        sidebar.firstChild.classList.toggle("open")
        
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