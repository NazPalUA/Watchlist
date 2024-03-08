import { ReactNode, useState } from "react"
import PopUp from "../PopUp/PopUp"
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

  const Error = () => (
    <div className={styles.error}>
      <p className={styles.customMessage}>{children}</p>
      {error && <p className={styles.apiMessage}>{error?.message}.</p>}
    </div>
  )

  if (!showError) return null

  return isPopup ? (
    <PopUp isShowing={showError}>
      <Error />
      <button className={styles.closeBtn} onClick={() => setShowError(false)}>
        ok
      </button>
    </PopUp>
  ) : (
    <Error />
  )
}
