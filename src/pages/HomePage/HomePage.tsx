import InfiniteScroll from "react-infinite-scroll-component"
// import Welcome from "../components/Welcome/Welcome"
import MoviesList from "../../components/MoviesList/MoviesList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { useInfinitePopularMovies } from "../../services/tmdb"
import "./HomePage.scss"
import EndMessage from "./SubComponents/EndMessage"

type HomePagePropTypes = {
  className?: string
}

function HomePage({ className }: HomePagePropTypes) {
  const { data, isError, fetchNextPage, hasNextPage } =
    useInfinitePopularMovies()

  const movies = data?.pages.map((page) => page.results).flat() || []

  return (
    <div className={`home-page ${className}`}>
      {/* <Welcome className="home-page__welcome" /> */}
      <SearchBox className="home-page__search-box" />
      <h4 className="home-page__title">Popular movies right now</h4>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={<EndMessage error={isError} length={movies.length} />}
      >
        <MoviesList moviesData={movies} />
      </InfiniteScroll>
    </div>
  )
}

export default HomePage
