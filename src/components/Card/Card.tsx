import classnames from "classnames"
import './Card.scss'


export type CardProps = {
    children: React.ReactNode,
    variant: "movie" | "actor",
    className?: string,
}

export default function Card({ children, variant, className  }: CardProps) {

    const allClasses = classnames("card", `card--${variant}`, className)

    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}
