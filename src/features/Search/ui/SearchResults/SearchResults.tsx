import InfiniteScroll from "react-infinite-scroll-component"
import { MoviesList } from "../../../../entities/movie"
import { useGetUserQuery } from "../../../../entities/session"
import { filterUniqueById } from "../../../../shared/lib/utils"
import Loader from "../../../../shared/ui/Loader"
import { useInfiniteSearchMovieQuery } from "../../api/hooks"
import EndMessage from "./EndMessage"
import { ErrorMessage } from "./ErrorMessage"

type SearchResultsProps = { searchText: string }

export function SearchResults({ searchText }: SearchResultsProps) {
  const { data, isError, error, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteSearchMovieQuery(searchText)

  const { data: sessionData } = useGetUserQuery()

  if (isError) return <ErrorMessage error={error} />

  const movies = data?.pages.map((page) => page.results).flat() || []
  const uniqueMovies = filterUniqueById(movies)

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
        <MoviesList
          moviesData={uniqueMovies}
          showAddToPlaylistBtn={sessionData ? true : false}
        />
      </InfiniteScroll>
    </>
  )
}
