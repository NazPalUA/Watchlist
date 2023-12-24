import useInfiniteScrollMoviesList from "./hooks/useInfiniteScrollMoviesList"
import InfiniteScroll from 'react-infinite-scroll-component'
import MoviesList from "./SubComponents/MoviesList"
import './InfiniteScrollList.scss'

type BaseProps = {
    className?: string;
}

export type SearchProps = BaseProps & {
    variant: "search";
    searchText: string | undefined; // Required for 'search' variant
}

export type PopularProps = BaseProps & {
    variant: "popular";
}

type InfiniteScrollListPropTypes = SearchProps | PopularProps;

export default function InfiniteScrollList(props: InfiniteScrollListPropTypes) {
    const { movies, hasMore, fetchNextPage } = useInfiniteScrollMoviesList(props);

    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={fetchNextPage}
            hasMore={hasMore} 
            loader={<h4>Loading...</h4>}
            endMessage={movies.length ? <p>No more movies</p> : <p>No results</p>}
        >
            <ul className={`${props.className} infinite-list card-grid`}>
                <MoviesList moviesData={movies} />
            </ul>
        </InfiniteScroll>
    )
}