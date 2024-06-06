import { createPortal } from "react-dom"
import styles from "./PopUp.module.scss"

type PopUpPropsWithClose = {
  isShowing: boolean
  setIsShowing: (value: boolean) => void
  closeOnEmptyClick: true
  children: React.ReactNode
}

type PopUpPropsWithoutClose = {
  isShowing: boolean
  closeOnEmptyClick?: false
  children: React.ReactNode
}

type PopUpProps = PopUpPropsWithClose | PopUpPropsWithoutClose

export function PopUp(props: PopUpProps) {
  const mountElement = document.getElementById("overlays")

  const PopUpUI = () => (
    <div
      className={`${styles.container} ${props.isShowing ? styles.active : ""}`}
      onClick={() =>
        props.closeOnEmptyClick ? props.setIsShowing(false) : null
      }
    >
      <div
        className={`${styles.modal} ${props.isShowing ? styles.active : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  )

  return createPortal(props.isShowing && <PopUpUI />, mountElement!)
}
