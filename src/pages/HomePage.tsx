import { useSearchParams } from "react-router-dom"
import InfiniteScrollList from "../components/InfiniteScrollList"
// import Welcome from "../components/Welcome/Welcome"
import SearchBox from "../components/SearchBox/SearchBox"
import './HomePage.scss'

type HomePagePropTypes = {
    className?: string
}

function HomePage({className}: HomePagePropTypes) {
    const [searchParams] = useSearchParams()

    const searchFilter = searchParams.get("search") || null


    return (
        <div className={`home-page ${className}`}>
            {/* <Welcome className="home-page__welcome" /> */}
            <SearchBox className="home-page__search-box" />
            {searchFilter 
                ? <InfiniteScrollList className="home-page__popular-list" variant="search" searchText={searchFilter} />
                : <InfiniteScrollList className="home-page__popular-list" variant="popular" />
            }
        </div>
    )
}

export default HomePage