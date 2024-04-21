import classNames from "classnames"
import styles from "./Burger.module.scss"

type BurgerPropTypes = {
  isOpen: boolean
  toggle: () => void
}

export function Burger({ isOpen, toggle }: BurgerPropTypes) {
  const burgerClasses = classNames(styles.burger, { [styles.open]: isOpen })

  return (
    <div className={burgerClasses} onClick={toggle}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  )
}
