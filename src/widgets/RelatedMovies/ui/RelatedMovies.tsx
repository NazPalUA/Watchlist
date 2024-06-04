import { ErrorMessage } from "../../../shared/ui/ErrorMessage"
import Loader from "../../../shared/ui/Loader"
import MoviesList from "../../../shared/ui/MoviesList/MoviesList"
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

  let Return =
    isRelatedMoviesError || !relatedMovies?.length ? (
      <ErrorMessage error={relatedMoviesError}>
        Error Loading related movies! Please try again later.
      </ErrorMessage>
    ) : (
      <MoviesList moviesData={relatedMovies} />
    )

  return (
    <>
      <h5 className={style.title}>Related Movies</h5>
      {isRelatedMoviesLoading ? <Loader /> : Return}
    </>
  )
}
