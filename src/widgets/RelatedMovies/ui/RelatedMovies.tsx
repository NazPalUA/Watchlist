import { MoviesList } from "../../../entities/movie"
import { useSessionQuery } from "../../../entities/session"
import { ErrorMessage } from "../../../shared/UI_ref/ErrorMessage"
import Loader from "../../../shared/UI_ref/Loader"
import { useRelatedMoviesQuery } from "../api/useRelatedMoviesQuery"
import style from "./RelatedMovies.module.scss"

type RelatedMoviesListPropTypes = {
  movieId: string
}
export function RelatedMovies({ movieId }: RelatedMoviesListPropTypes) {
  const {
    data: relatedMovies,
    isLoading: isRelatedMoviesLoading,
    isError: isRelatedMoviesError,
    error: relatedMoviesError,
  } = useRelatedMoviesQuery(movieId, 20)

  const { data: sessionData } = useSessionQuery()

  let Return =
    isRelatedMoviesError || !relatedMovies?.length ? (
      <ErrorMessage error={relatedMoviesError}>
        Error Loading related movies! Please try again later.
      </ErrorMessage>
    ) : (
      <MoviesList
        moviesData={relatedMovies}
        showAddToPlaylistBtn={sessionData ? true : false}
      />
    )

  return (
    <>
      <h5 className={style.title}>Related Movies</h5>
      {isRelatedMoviesLoading ? <Loader /> : Return}
    </>
  )
}
