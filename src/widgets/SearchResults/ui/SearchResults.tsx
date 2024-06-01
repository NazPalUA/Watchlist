import InfiniteScroll from "react-infinite-scroll-component"
import { useInfiniteSearchMovie } from "../../../shared/API/tmdb"
import getUniqueMoviesData from "../../../shared/lib/utils/getUniqueMoviesData"
import Loader from "../../../shared/ui/Loader"
import MoviesList from "../../../shared/ui/MoviesList/MoviesList"
import EndMessage from "./EndMessage"
import { ErrorMessage } from "./ErrorMessage"

type SearchResultsProps = { searchText: string }

export function SearchResults({ searchText }: SearchResultsProps) {
  const { data, isError, error, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteSearchMovie(searchText)

  if (isError) return <ErrorMessage error={error} />

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
