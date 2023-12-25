import useInfiniteScrollMoviesList from "./hooks/useInfiniteScrollMoviesList"
import InfiniteScroll from 'react-infinite-scroll-component'
import MoviesList from "./SubComponents/MoviesList"
import './InfiniteScrollList.scss'

type BaseProps = {
    className?: string
}

export type SearchProps = BaseProps & {
    variant: "search"
    searchText: string | undefined // Required for 'search' variant
}

export type PopularProps = BaseProps & {
    variant: "popular"
}

type InfiniteScrollListPropTypes = SearchProps | PopularProps

/**
 * InfiniteScrollList component that utilizes the useInfiniteScrollMoviesList hook
 * to render a list of movies with infinite scrolling capability.
 * 
 * @param props Component properties for fetching and displaying movies.
 * @returns The InfiniteScrollList component with movies displayed in an infinite scroll layout.
 */

export default function InfiniteScrollList(props: InfiniteScrollListPropTypes) {
    // Extracting movies and related states from the custom hook
    const { movies, hasMore, fetchNextPage, error } = useInfiniteScrollMoviesList(props)

    // Function to render the end message based on the current state
    const getEndMessage = () => {
        if (error) {
            return <p>Error loading movies. Please try again later.</p>
        }
        return movies.length ? <p>No more movies</p> : <p>No results</p>
    }

    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={fetchNextPage}
            hasMore={hasMore} 
            loader={<h4>Loading...</h4>}
            endMessage={getEndMessage()}
        >
            <ul className={`${props.className} infinite-list card-grid`}>
                <MoviesList moviesData={movies} />
            </ul>
        </InfiniteScroll>
    )
}