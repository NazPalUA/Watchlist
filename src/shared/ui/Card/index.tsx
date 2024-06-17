import AddBtn, { AddBtnProps } from "./AddBtn/AddBtn"
import Card, { CardProps } from "./Card/Card"
import Image, { CardImgProps } from "./CardImg/CardImg"
import Description, { DescriptionProps } from "./Description/Description"
import Rating, { RatingProps } from "./Rating/Rating"

// Define the type for the compound component
type CompoundCard = React.FC<CardProps> & {
  Description: React.FC<DescriptionProps>
  Rating: React.FC<RatingProps>
  AddToPlaylistBtn: React.FC<AddBtnProps>
  Image: React.FC<CardImgProps>
}

// Extend the Card component with the sub-components
const ExtendedCard = Card as CompoundCard
ExtendedCard.Description = Description
ExtendedCard.Rating = Rating
ExtendedCard.AddToPlaylistBtn = AddBtn
ExtendedCard.Image = Image

export default ExtendedCard
