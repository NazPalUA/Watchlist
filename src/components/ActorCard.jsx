import React from "react";
import './ActorCard.scss'

export default function ActorCard(props) {
    return (
        <div className={`actor-card ${props.className}`}>
            <img 
                className="actor-card__photo"
                src={props.imgPath}
                alt="actor photo"
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