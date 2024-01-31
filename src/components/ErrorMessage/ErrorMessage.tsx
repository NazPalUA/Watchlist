import { ReactNode } from "react"
import styles from "./ErrorMessage.module.scss"

type ErrorMessageProps = {
  children: ReactNode
  error?: Error
}

export default function ErrorMessage({ error, children }: ErrorMessageProps) {
  return (
    <div className={styles.error}>
      <p className={styles.customMessage}>{children}</p>
      {error && <p className={styles.apiMessage}>{error?.message}.</p>}
    </div>
  )
}
