import noProfilePhoto from "../images/no_profile_photo.png"
import './ActorCard.scss'

type ActorCardPropTypes = {
    imgPath: string | undefined,
    name: string,
    character: string | undefined,
    className?: string
}

function ActorCard({ imgPath, name, character, className }: ActorCardPropTypes) {

    return (
        <div className={`actor-card ${className}`}>
            <img
                className="actor-card__photo"
                src={imgPath ? imgPath : noProfilePhoto}
                alt={`${name} photo`}
            />
            <p className="actor-card__name">
                {name}
            </p>
            <p className="actor-card__role">
                {character ? character: "unknown"}
            </p>
        </div>
    )
}

export default ActorCard