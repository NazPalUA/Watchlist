import CustomLoader from "../../../components/CustomLoader"
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage"
import MoviesList from "../../../components/MoviesList/MoviesList"
import { useRelatedMovies } from "../../../services/tmdb"

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
      <MoviesList
        moviesData={relatedMovies}
        className="movie-page__list card-grid"
      />
    )

  return (
    <>
      <h5 className="movie-page__section-title movie-page__section-title_movies">
        Related Movies
      </h5>
      {isRelatedMoviesLoading ? <CustomLoader /> : Return}
    </>
  )
}
