import React from "react"
import noProfilePhoto from "../images/no_profile_photo.png"
import './ActorCard.scss'

function ActorCard(props) {
    const imgPath = props.imgPath ? props.imgPath : ActorCard.defaultProps.imgPath
    return (
        <div className={`actor-card ${props.className}`}>
            <img 
                className="actor-card__photo"
                src={imgPath}
                alt={`${props.name} photo`}
            />
            <p className="actor-card__name">
                {props.name}
            </p>
            <p className="actor-card__role">
                {props.character}
            </p>
        </div>
    )
}

ActorCard.defaultProps = {
    imgPath: noProfilePhoto,
    name: "",
    character: ""
}

export default ActorCard