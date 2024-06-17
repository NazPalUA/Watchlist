"use client"

import InfiniteScroll from "react-infinite-scroll-component"
import {
  MoviesList,
  useInfinitePopularMoviesQuery,
} from "../../../entities/movie"
import { useSessionQuery } from "../../../entities/session"
import { filterUniqueById } from "../../../shared/lib"
import Loader from "../../../shared/ui/Loader"
import EndMessage from "./EndMessage"
import ErrorMessage from "./ErrorMessage"
import styles from "./PopularMovies.module.scss"

export function PopularMovies() {
  const { data, isError, error, isFetching, fetchNextPage, hasNextPage } =
    useInfinitePopularMoviesQuery()

  const { data: sessionData } = useSessionQuery()

  const movies = data?.pages.map(page => page.results).flat() || []
  const uniqueMovies = filterUniqueById(movies)

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
          <MoviesList
            moviesData={uniqueMovies}
            showAddToPlaylistBtn={sessionData ? true : false}
          />
        </InfiniteScroll>
      )}
    </>
  )
}
