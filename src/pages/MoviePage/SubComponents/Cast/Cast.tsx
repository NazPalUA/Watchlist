import { useMovieCredits } from "../../../../shared/API/tmdb"
import ErrorMessage from "../../../../shared/UI/ErrorMessage/ErrorMessage"
import Loader from "../../../../shared/UI/Loader"
import styles from "./Cast.module.scss"
import CastList from "./CastList"

type CastPropTypes = {
  movieId: string
}

export default function Cast({ movieId }: CastPropTypes) {
  const {
    data: movieCredits,
    isLoading: isMovieCreditsLoading,
    isError: isMovieCreditsError,
    error: movieCreditsError,
  } = useMovieCredits(movieId)

  if (!movieCredits) return <div>Error</div>

  let Return =
    isMovieCreditsError || !movieCredits.cast.length ? (
      <ErrorMessage error={movieCreditsError}>
        Error Loading cast! No data found.
      </ErrorMessage>
    ) : (
      <CastList movieCredits={movieCredits} />
    )

  return (
    <>
      <h5 className={styles.title}>Cast</h5>
      {isMovieCreditsLoading ? <Loader /> : Return}
    </>
  )
}
