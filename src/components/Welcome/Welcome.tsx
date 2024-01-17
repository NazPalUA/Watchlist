import checkmarkWhiteIcon from "../../images/checkmark_white_icon.svg"
import ribbonIcon from "../../images/ribbon_icon.svg"
import './Welcome.scss'

type WelcomePropTypes = {
    className?: string
}

function Welcome({ className }: WelcomePropTypes) {
    return (
        <div className={`welcome ${className}`}>
            <h1 className="welcome__title">
                Welcome to <span>Watchlists</span>
            </h1>
            <p className="welcome__paragraph">
                Browse movies, add them to watchlists and share them with friends.
            </p>
            <p className="welcome__paragraph welcome__paragraph_2">
                Just click the<img
                    className="welcome__add-icon"
                    src={ribbonIcon}
                    alt="add icon"
                />to add a movie, the poster to see more details or<img
                    className="welcome__watched-icon"
                    src={checkmarkWhiteIcon}
                    alt="watched icon"
                />to mark the movie as watched.
            </p>
        </div>
    )
}

export default Welcome