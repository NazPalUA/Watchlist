import InfiniteScroll from "react-infinite-scroll-component"
import { useInfinitePopularMovies } from "../../../shared/API/tmdb"
import getUniqueMoviesData from "../../../shared/lib/utils/getUniqueMoviesData"
import { ErrorMessage } from "../../../shared/ui/ErrorMessage"
import Loader from "../../../shared/ui/Loader"
import MoviesList from "../../../shared/ui/MoviesList/MoviesList"
import EndMessage from "./EndMessage"
import styles from "./PopularMovies.module.scss"

export function PopularMovies() {
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
