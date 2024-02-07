import posterNotFound from "../../assets/images/poster_not_found.png"

export type CardImageProps = React.ComponentPropsWithoutRef<"img"> & {
    children: string | undefined,
    variant: "movie-poster" | "actor-photo"
}

export default function CardImage({ children, variant, ...rest }: CardImageProps) {

    return (
        <img className={`card__${variant}`} src={children || posterNotFound}
            alt={variant=="movie-poster" ? "movie poster" : "actor photo"} {...rest} />
    )
}