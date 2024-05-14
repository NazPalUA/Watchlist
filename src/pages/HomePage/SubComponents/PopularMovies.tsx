import InfiniteScroll from "react-infinite-scroll-component"
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage"
import Loader from "../../../components/Loader"
import MoviesList from "../../../components/MoviesList/MoviesList"
import { useInfinitePopularMovies } from "../../../shared/API/tmdb"
import getUniqueMoviesData from "../../../shared/utils/getUniqueMoviesData"
import styles from "../HomePage.module.scss"
import EndMessage from "./EndMessage"

export default function PopularMovies() {
  const { data, isError, error, isFetching, fetchNextPage, hasNextPage } =
    useInfinitePopularMovies()

  const movies = data?.pages.map((page) => page.results).flat() || []
  const uniqueMovies = getUniqueMoviesData(movies)

  return (
    <>
      <h4 className={styles.title}>Popular movies right now</h4>
      {isError ? (
        <ErrorMessage error={error}>
          Error loading movies. Please try again later.
        </ErrorMessage>
      ) : (
        <InfiniteScroll
          dataLength={uniqueMovies.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<Loader />}
          endMessage={
            <EndMessage
              isError={isError}
              length={uniqueMovies.length}
              isFetching={isFetching}
            />
          }
        >
          <MoviesList moviesData={uniqueMovies} />
        </InfiniteScroll>
      )}
    </>
  )
}
