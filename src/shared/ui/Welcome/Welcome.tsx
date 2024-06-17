import checkmarkWhiteIcon from "@/public/images/checkmark_white_icon.svg"
import ribbonIcon from "@/public/images/ribbon_icon.svg"
import Image from "next/image"
import styles from "./Welcome.module.scss"

type WelcomePropTypes = {
  className?: string
}

export const Welcome = ({ className }: WelcomePropTypes) => {
  return (
    <div className={`${styles.box} ${className}`}>
      <h1 className={styles.title}>
        Welcome to <span>Watchlists</span>
      </h1>
      <p className={styles.paragraph}>
        Browse movies, add them to watchlists and share them with friends.
      </p>
      <p className={`${styles.paragraph} ${styles.secondParagraph}`}>
        Just click on a
        <Image className={styles.addIcon} src={ribbonIcon} alt="add icon" />
        to add a movie, a poster to see more details or a
        <Image
          className={styles.watchedIcon}
          src={checkmarkWhiteIcon}
          alt="watched icon"
        />
        to mark the movie as watched.
      </p>
    </div>
  )
}
