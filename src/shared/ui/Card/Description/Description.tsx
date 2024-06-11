import styles from "./Description.module.scss"

export type DescriptionProps = {
  children: React.ReactNode
  variant: "year" | "character" | "movie" | "actor"
}

export default function Description({ children, variant }: DescriptionProps) {
  return <p className={styles[`description--${variant}`]}>{children}</p>
}
