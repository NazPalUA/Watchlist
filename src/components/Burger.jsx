import React from "react"
import './Burger.scss'

export default function Burger(props) {

    return (
        <div 
            className={`burger ${props.className}`}
            onClick={()=>{
                document.body.classList.toggle("open")
                document.body.classList.toggle("closed")
            }}
        >
            <div className="burger__bar"></div>
            <div className="burger__bar"></div>
            <div className="burger__bar"></div>
        </div>
    )
}