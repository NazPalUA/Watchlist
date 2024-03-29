import CustomLoader from "../../../../components/CustomLoader"
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage"
import MoviesList from "../../../../components/MoviesList/MoviesList"
import { useRelatedMovies } from "../../../../services/tmdb"
import style from "./RelatedMovies.module.scss"

type RelatedMoviesListPropTypes = {
  movieId: string
}
export default function RelatedMovies({ movieId }: RelatedMoviesListPropTypes) {
  const {
    data: relatedMovies,
    isLoading: isRelatedMoviesLoading,
    isError: isRelatedMoviesError,
    error: relatedMoviesError,
  } = useRelatedMovies(movieId, 20)

  let Return =
    isRelatedMoviesError || !relatedMovies?.length ? (
      <ErrorMessage error={relatedMoviesError}>
        Error Loading related movies! Please try again later.
      </ErrorMessage>
    ) : (
      <MoviesList moviesData={relatedMovies} className="card-grid" />
    )

  return (
    <>
      <h5 className={style.title}>Related Movies</h5>
      {isRelatedMoviesLoading ? <CustomLoader /> : Return}
    </>
  )
}
