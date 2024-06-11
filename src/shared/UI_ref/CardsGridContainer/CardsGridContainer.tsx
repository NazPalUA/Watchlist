import classNames from "classnames"
import styles from "./CardsGridContainer.module.scss"

type CardsGridContainerProps = { children: React.ReactNode; className?: string }

export function CardsGridContainer({
  children,
  className,
}: CardsGridContainerProps) {
  const allClasses = classNames(`${styles.grid}`, className)
  return <ul className={allClasses}>{children}</ul>
}
