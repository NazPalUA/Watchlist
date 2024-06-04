import InfiniteScroll from "react-infinite-scroll-component"
import { useInfinitePopularMoviesQuery } from "../../../entities/movie"
import { getUniqueMovies } from "../../../shared/lib/utils/getUniqueMovies"
import Loader from "../../../shared/ui/Loader"
import MoviesList from "../../../shared/ui/MoviesList/MoviesList"
import EndMessage from "./EndMessage"
import ErrorMessage from "./ErrorMessage"
import styles from "./PopularMovies.module.scss"

export function PopularMovies() {
  const { data, isError, error, isFetching, fetchNextPage, hasNextPage } =
    useInfinitePopularMoviesQuery()

  const movies = data?.pages.map((page) => page.results).flat() || []
  const uniqueMovies = getUniqueMovies(movies)

  return (
    <>
      <h4 className={styles.title}>Popular movies right now</h4>
      {isError ? (
        <ErrorMessage error={error} />
      ) : (
        <InfiniteScroll
          dataLength={uniqueMovies.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<Loader />}
          endMessage={
            <EndMessage length={uniqueMovies.length} isFetching={isFetching} />
          }
        >
          <MoviesList moviesData={uniqueMovies} />
        </InfiniteScroll>
      )}
    </>
  )
}
