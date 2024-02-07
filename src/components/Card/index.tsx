import Card, { CardProps } from "./Card"
import CardAddToPlaylistBtn, {
  CardAddToPlaylistBtnProps,
} from "./CardAddToPlaylistBtn"
import CardDescription, { CardDescriptionProps } from "./CardDescription"
import CardImage, { CardImageProps } from "./CardImage"
import CardRating, { CardRatingProps } from "./CardRating"

// Define the type for the compound component
type CompoundCard = React.FC<CardProps> & {
  Description: React.FC<CardDescriptionProps>
  Rating: React.FC<CardRatingProps>
  AddToPlaylistBtn: React.FC<CardAddToPlaylistBtnProps>
  Image: React.FC<CardImageProps>
}

// Extend the Card component with the sub-components
const ExtendedCard = Card as CompoundCard
ExtendedCard.Description = CardDescription
ExtendedCard.Rating = CardRating
ExtendedCard.AddToPlaylistBtn = CardAddToPlaylistBtn
ExtendedCard.Image = CardImage

export default ExtendedCard
