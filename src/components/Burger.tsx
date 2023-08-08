import './Burger.scss'

type BurgerPropTypes = {
    className?: string
}

export default function Burger({ className }: BurgerPropTypes) {

    return (
        <div
            className={`burger ${className}`}
            onClick={() => {
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