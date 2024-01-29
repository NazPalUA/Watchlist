import Card from "../../../components/Card"
import { useMovieCredits } from "../../../services/tmdb"

type CastListPropTypes = {
  movieId: string
}

export default function Cast({ movieId }: CastListPropTypes) {
  const {
    isLoading: isMovieCreditsLoading,
    isError: isMovieCreditsError,
    data: movieCredits,
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

  return (
    <>
      <h5 className="movie-page__section-title">Cast</h5>
      <ul className="movie-page__list card-grid">{castListArray}</ul>
    </>
  )
}
