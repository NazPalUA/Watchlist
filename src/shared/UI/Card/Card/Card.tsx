import classnames from "classnames"
import styles from "./Card.module.scss"

export type CardProps = {
  children: React.ReactNode
  variant: "movie" | "actor"
  className?: string
}

export default function Card({ children, variant, className }: CardProps) {
  const allClasses = classnames(
    styles.card,
    styles[`card--${variant}`],
    className
  )

  return <div className={allClasses}>{children}</div>
}
