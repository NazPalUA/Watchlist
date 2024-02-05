import Card from "../../../components/Card"
import CustomLoader from "../../../components/CustomLoader"
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage"
import { useMovieCredits } from "../../../services/tmdb"

type CastListPropTypes = {
  movieId: string
}

export default function Cast({ movieId }: CastListPropTypes) {
  const {
    data: movieCredits,
    isLoading: isMovieCreditsLoading,
    isError: isMovieCreditsError,
    error: movieCreditsError,
  } = useMovieCredits(movieId)

  if (!movieCredits) return <div>Error</div>
  const castListArray = movieCredits.cast.slice(0, 12).map((person) => {
    return (
      <li className="movie-page__list-item" key={person.id}>
        <Card className="movie-page__card" variant="actor">
          <Card.Image variant="actor-photo">
            {person.profile_path
              ? `https://image.tmdb.org/t/p/original${person.profile_path}`
              : undefined}
          </Card.Image>
          <Card.Description variant="actor">{person.name}</Card.Description>
          <Card.Description variant="character">
            {person.character}
          </Card.Description>
        </Card>
      </li>
    )
  })

  let Return =
    isMovieCreditsError || !movieCredits.cast.length ? (
      <ErrorMessage error={movieCreditsError}>
        Error Loading cast! No data found.
      </ErrorMessage>
    ) : (
      <ul className="movie-page__list card-grid">{castListArray}</ul>
    )

  return (
    <>
      <h5 className="movie-page__section-title">Cast</h5>
      {isMovieCreditsLoading ? <CustomLoader /> : Return}
    </>
  )
}
