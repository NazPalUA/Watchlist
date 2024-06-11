import styles from "./StaticBurger.module.scss"

type StaticBurgerPropTypes = {
  toggle: () => void
}

export const StaticBurger = ({ toggle }: StaticBurgerPropTypes) => {
  return (
    <div className={styles.burger} onClick={toggle}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  )
}
