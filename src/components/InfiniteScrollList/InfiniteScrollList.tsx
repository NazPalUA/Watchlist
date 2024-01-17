import useInfiniteScrollMoviesList from "./hooks/useInfiniteScrollMoviesList"
import InfiniteScroll from 'react-infinite-scroll-component'
import MoviesList from "./SubComponents/MoviesList"
import './InfiniteScrollList.scss'
import EndMessage from "./SubComponents/EndMessage"

type BaseProps = {
    className?: string
}

export type SearchProps = BaseProps & {
    variant: "search"
    searchText: string | undefined | null // Required for 'search' variant
}

export type PopularProps = BaseProps & {
    variant: "popular"
}

type InfiniteScrollListPropTypes = SearchProps | PopularProps

export default function InfiniteScrollList(props: InfiniteScrollListPropTypes) {
    
    const { movies, hasMore, fetchNextPage, error } = useInfiniteScrollMoviesList(props)

    if(props.variant==="search" && !props.searchText) return <p>Invalid search input</p>

    return (
        <>
            <h4 className="infinite-list__title">
                {props.variant==="popular" ? "Popular movies right now" : "Search Results:"}
            </h4>
            <InfiniteScroll
                dataLength={movies.length}
                next={fetchNextPage}
                hasMore={hasMore} 
                loader={<h4>Loading...</h4>}
                endMessage={<EndMessage error={error} length={movies.length}/>}
            >
                <ul className={`${props.className} infinite-list card-grid`}>
                    <MoviesList moviesData={movies} />
                </ul>
            </InfiniteScroll>
        </>
    )
}