import { MovieCredits } from "../../../../shared/API/tmdb"
import Card from "../../../../shared/ui/Card"
import { CardsGridContainer } from "../../../../shared/ui/CardsGridContainer"
import styles from "./Cast.module.scss"

type CastListPropTypes = {
  movieCredits: MovieCredits
}

export default function CastList({ movieCredits }: CastListPropTypes) {
  const castListArray = movieCredits.cast.slice(0, 12).map((person) => {
    return (
      <li className={styles.listItem} key={person.id}>
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
    )
  })

  return <CardsGridContainer>{castListArray}</CardsGridContainer>
}
