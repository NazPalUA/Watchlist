export type CardDescriptionProps = {
    children: React.ReactNode
    variant: "year" | "character" | "movie" | "actor",
}

export default function CardDescription({ children, variant }: CardDescriptionProps) {
    return (
        <p className={`card__description card__description--${variant}`}>
            {children}
        </p>
    )
}