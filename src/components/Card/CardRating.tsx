import greatIcon from "../../images/great_icon.svg"
import normalIcon from "../../images/normal_icon.svg"
import awfulIcon from "../../images/awful_icon.svg"
import confusedIcon from "../../images/confused_icon.png"

export type CardRatingProps = {
    children: number,
}

export default function CardRating({ children }: CardRatingProps) {

    const rating = children
    
    return (
        <div className="card__rating-wrapper">
            <img className="card__emoji"
                src={rating == 0 ? confusedIcon : rating > 80 ? greatIcon : rating > 35 ? normalIcon : awfulIcon } 
                alt="rating emoji" 
            />
            <span className="card__rating">
                {rating > 0 ? rating : "?"}
                <span className="card__max-rating">/100</span>
            </span>
        </div>
    )
}