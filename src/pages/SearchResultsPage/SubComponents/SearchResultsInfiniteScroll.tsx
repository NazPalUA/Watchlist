import InfiniteScroll from "react-infinite-scroll-component"
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage"
import Loader from "../../../components/Loader"
import MoviesList from "../../../components/MoviesList/MoviesList"
import { useInfiniteSearchMovie } from "../../../shared/API/tmdb"
import getUniqueMoviesData from "../../../shared/utils/getUniqueMoviesData"
import EndMessage from "./EndMessage"

type SearchResultsInfiniteScrollProps = { searchText: string }

export default function SearchResultsInfiniteScroll({
  searchText,
}: SearchResultsInfiniteScrollProps) {
  const { data, isError, error, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteSearchMovie(searchText)

  if (isError) {
    return (
      <ErrorMessage error={error}>
        Error searching movies. Please try again later
      </ErrorMessage>
    )
  }

  const movies = data?.pages.map((page) => page.results).flat() || []
  const uniqueMovies = getUniqueMoviesData(movies)

  return (
    <>
      <InfiniteScroll
        dataLength={uniqueMovies.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Loader />}
        endMessage={
          <EndMessage isLoading={isLoading} length={uniqueMovies.length} />
        }
      >
        <MoviesList moviesData={uniqueMovies} />
      </InfiniteScroll>
    </>
  )
}
