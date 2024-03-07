import { ReactNode, useState } from "react"
import { createPortal } from "react-dom"
import styles from "./ErrorMessage.module.scss"

type ErrorMessageProps = {
  children: ReactNode
  error?: Error | null
  isPopup?: boolean
}

export default function ErrorMessage({
  error,
  children,
  isPopup = false,
}: ErrorMessageProps) {
  const [showError, setShowError] = useState(true)
  const mountElement = document.getElementById("overlays")

  function hidePopup() {
    setShowError(false)
  }

  function Error() {
    return (
      <div className={styles.error}>
        <p className={styles.customMessage}>{children}</p>
        {error && <p className={styles.apiMessage}>{error?.message}.</p>}
      </div>
    )
  }

  if (!showError) return null

  return isPopup ? (
    createPortal(
      <div className={`${styles.container} ${showError ? styles.active : ""}`}>
        <div className={`${styles.modal} ${showError ? styles.active : ""}`}>
          <Error />
          <button onClick={() => hidePopup()}>ok</button>
        </div>
      </div>,
      mountElement!
    )
  ) : (
    <Error />
  )
}
