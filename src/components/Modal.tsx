import { ReactNode } from "react"
import "./Modal.scss"

type ModalPropTypes = {
    active: boolean,
    setActive: (active: boolean) => void,
    children: ReactNode
}

export default function Modal({ active, setActive, children }: ModalPropTypes) {

    const modalClass = active ? "modal active" : "modal"
    const modalContentClass = active ? "modal__content active" : "modal__content"

    const handleClick = () => setActive(false)
    const handleContentClick = (e: React.MouseEvent) => e.stopPropagation()

    return (
        <div className={modalClass} onClick={handleClick}>
            <div className={modalContentClass} onClick={handleContentClick}>
                {children}
            </div>
        </div>
    )
}