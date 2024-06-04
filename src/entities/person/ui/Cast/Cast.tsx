import { useMovieCreditsQuery } from "../.."
import { ErrorMessage } from "../../../../shared/ui/ErrorMessage"
import Loader from "../../../../shared/ui/Loader"
import CastList from "../CastList"
import styles from "./Cast.module.scss"

type CastPropTypes = {
  movieId: string
}

export default function Cast({ movieId }: CastPropTypes) {
  const { data, isLoading, isError, error } = useMovieCreditsQuery(movieId)

  let content

  if (isLoading) {
    content = <Loader />
  } else if (isError || !data?.cast.length) {
    content = (
      <ErrorMessage error={error}>
        Error Loading cast! No data found.
      </ErrorMessage>
    )
  } else {
    content = <CastList cast={data.cast} />
  }

  return (
    <>
      <h5 className={styles.title}>Cast</h5>
      {content}
    </>
  )
}
