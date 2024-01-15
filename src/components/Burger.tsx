import { useSidebarContext } from '../context/SidebarContext'
import './Burger.scss'

type BurgerPropTypes = {
    className?: string
}

export default function Burger({ className }: BurgerPropTypes) {

    const { toggleSidebar } = useSidebarContext()

    return (
        <div
            className={`burger ${className}`}
            onClick={() => toggleSidebar() }
        >
            <div className="burger__bar"></div>
            <div className="burger__bar"></div>
            <div className="burger__bar"></div>
        </div>
    )
}