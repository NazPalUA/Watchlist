import styles from "./Rating.module.scss"
import awfulIcon from "/images/awful_icon.svg"
import confusedIcon from "/images/confused_icon.png"
import greatIcon from "/images/great_icon.svg"
import normalIcon from "/images/normal_icon.svg"

export type RatingProps = {
  children: number
}

export default function Rating({ children }: RatingProps) {
  const rating = children

  return (
    <div className={styles.container}>
      <img
        className={styles.emoji}
        src={
          rating == 0
            ? confusedIcon
            : rating > 80
            ? greatIcon
            : rating > 35
            ? normalIcon
            : awfulIcon
        }
        alt="rating emoji"
      />
      <span className={styles.rating}>
        {rating > 0 ? rating : "?"}
        <span className={styles.maxRating}>/100</span>
      </span>
    </div>
  )
}
