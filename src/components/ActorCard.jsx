import React from "react";
import './ActorCard.scss'

export default function ActorCard(props) {
    return (
        <div className={`actor-card ${props.className}`}>
            <img 
                className="actor-card__photo"
                src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x"
                alt="actor photo"
            />
            <p className="actor-card__name">
                Tom Cruise With a Long Name
            </p>
            <p className="actor-card__role">
                Capt. Pete 'Maverick' Mitchell
            </p>
        </div>
    )
}