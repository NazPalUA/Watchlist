import InfiniteScrollList from "../components/InfiniteScrollList"
import Welcome from "../components/Welcome"
import SearchBox from "../components/SearchBox"
import './HomePage.scss'

type HomePagePropTypes = {
    className?: string
}

function HomePage({className}: HomePagePropTypes) {

    return (
        <div className={`home-page ${className}`}>
            <Welcome className="home-page__welcome" />
            <SearchBox className="home-page__search-box" />
            <h4 className="home-page__popular-title">Popular movies right now</h4>
            <InfiniteScrollList className="home-page__popular-list" variant="popular" />
        </div>
    )
}

export default HomePage