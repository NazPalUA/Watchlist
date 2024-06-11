import styles from "./Image.module.scss"
import posterNotFound from "/images/poster_not_found.png"

export type ImageProps = React.ComponentPropsWithoutRef<"img"> & {
  children: string | undefined
  variant: "movie-poster" | "actor-photo"
}

export default function Image({ children, variant, ...rest }: ImageProps) {
  return (
    <img
      className={styles[`image__${variant}`]}
      src={children || posterNotFound}
      alt={variant == "movie-poster" ? "movie poster" : "actor photo"}
      {...rest}
    />
  )
}
