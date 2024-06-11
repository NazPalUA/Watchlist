import styles from "./FormTitle.module.scss"

type FormTitleProps = {}

export default function FormTitle({}: FormTitleProps) {
  return <h4 className={styles.title}>Create a new watchlist</h4>
}
