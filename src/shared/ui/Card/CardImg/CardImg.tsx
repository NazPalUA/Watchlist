import posterNotFound from "@/public/images/poster_not_found.png"
import Image, { ImageProps } from "next/image"
import styles from "./CardImg.module.scss"

export type CardImgProps = {
  children: string | undefined
  variant: "movie-poster" | "actor-photo"
  rest?: ImageProps
}

export default function CardImg({ children, variant, ...rest }: CardImgProps) {
  return (
    <Image
      className={styles[`image__${variant}`]}
      width={300}
      height={450}
      src={children || posterNotFound}
      alt={variant == "movie-poster" ? "movie poster" : "actor photo"}
      {...rest}
    />
  )
}
