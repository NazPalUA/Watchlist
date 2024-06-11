import { MovieCast } from "../../../shared/API_ref/tmdb"
import Card from "../../../shared/UI_ref/Card"
import { CardsGridContainer } from "../../../shared/UI_ref/CardsGridContainer"

type CastListPropTypes = {
  cast: MovieCast[]
  className?: string
}

export default function CastList({ cast, className = "" }: CastListPropTypes) {
  return (
    <CardsGridContainer className={className}>
      {cast.slice(0, 12).map((person) => (
        <li style={{ listStyle: "none" }} key={person.id}>
          <Card variant="actor">
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
      ))}
    </CardsGridContainer>
  )
}
