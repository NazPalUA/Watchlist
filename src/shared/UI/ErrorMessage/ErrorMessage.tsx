import { ReactNode, useState } from "react"
import PopUp from "../../../components/PopUp/PopUp"
import styles from "./ErrorMessage.module.scss"

type ErrorMessageProps = {
  children: ReactNode
  error?: Error | null
  isPopup?: boolean
  wrapperStyle?: React.CSSProperties
  customMessageStyle?: React.CSSProperties
  apiMessageStyle?: React.CSSProperties
}

export default function ErrorMessage({
  error,
  children,
  isPopup = false,
  wrapperStyle,
  customMessageStyle,
  apiMessageStyle,
}: ErrorMessageProps) {
  const [showError, setShowError] = useState(true)

  const Error = () => (
    <div className={styles.error} style={wrapperStyle}>
      <p className={styles.customMessage} style={customMessageStyle}>
        {children}
      </p>
      {error && (
        <p className={styles.apiMessage} style={apiMessageStyle}>
          {error?.message}.
        </p>
      )}
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
