import { Link } from "react-router-dom"
import type { MovieDetails } from "../../../../shared/api/tmdb"
import getAverageVote from "../../lib/getAverageVote"
import getUnwatchedRuntime from "../../lib/getUnwatchedRuntime"
import styles from "./WatchlistDetails.module.scss"
import editIcon from "/images/edit_icon.svg"

type PropTypes = {
  name: string
  description: string
  moviesData: MovieDetails[]
}

export default function WatchlistDetails({
  name,
  description,
  moviesData,
}: PropTypes) {
  const avgScore = getAverageVote(moviesData)
  const unwatchedRuntime = getUnwatchedRuntime(moviesData)

  return (
    <>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>{name}</h2>
        <Link to={`edit`} className={styles.edit}>
          <img className={styles.editIcon} src={editIcon} alt="edit icon" />
        </Link>
      </div>
      {description !== "" && (
        <>
          <h5 className={styles.aboutTitle}>About this watchlist</h5>
          <p className={styles.about}>{description}</p>
        </>
      )}
      <ul className={styles.boxesContainer}>
        <li className={styles.box}>
          <strong className={styles.boxName}>ITEMS ON LIST</strong>
          <p className={styles.boxContent}>{moviesData.length}</p>
        </li>
        <li className={styles.box}>
          <strong className={styles.boxName}>UNWATCHED RUNTIME</strong>
          <p className={styles.boxContent}>{unwatchedRuntime}</p>
        </li>
        <li className={styles.box}>
          <strong className={styles.boxName}>AVERAGE SCORE</strong>
          <p className={styles.boxContent}>{avgScore || "0"}</p>
        </li>
      </ul>
    </>
  )
}
