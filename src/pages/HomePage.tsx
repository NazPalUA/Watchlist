import { Link } from "react-router-dom"
import InfiniteScroll from 'react-infinite-scroll-component'
import InfiniteScrollMoviesList from "../components/InfiniteScrollMoviesList"
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
            <InfiniteScrollMoviesList classNamePrefix="home" />
        </div>
    )
}

export default HomePage