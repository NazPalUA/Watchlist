import { Link } from "react-router-dom"
import InfiniteScroll from 'react-infinite-scroll-component'
import useMultiplePageApi from "../hooks/useMultiplePageApi"
import MovieCard from "../components/MovieCard"


type InfiniteScrollMoviesListPropTypes = {
    classNamePrefix: "home" | "search-results",
    searchText?: string
}

function InfiniteScrollMoviesList({classNamePrefix, searchText}: InfiniteScrollMoviesListPropTypes) {
    
    // use the custom hook to initialize the data, hasMore, page, and setUrl variables with default values and fetches the popular movies data for the first page
    const BASE_URL = "https://api.themoviedb.org/3"
    const FULL_URL = classNamePrefix === "home" ?
        `${BASE_URL}/movie//popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`:
        `${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchText}&page=1`

    const { data, hasMore, page, setUrl } = useMultiplePageApi(FULL_URL)

    const moviesListHTML = !data ? [] : data.map(movie => {
        return (
            <li className={classNamePrefix === "home" ? "home-page__popular-item" : "search-results-page__item"} 
                key={movie.id}
            >
                <Link to={`/movie-page/${movie.id}`} className={`${classNamePrefix}-page__link`}>
                    <MovieCard
                        className={`${classNamePrefix}-page__movie-card`}
                        movieId={movie.id.toString()}
                        title={movie.title}
                        path={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : undefined}
                        year={movie.release_date ? movie.release_date.slice(0, 4) : "?"}
                        rating={Math.round(movie.vote_average * 10)}
                    />
                </Link>
            </li>
        )
    })

    function handleNext() {
        if (classNamePrefix === "home") setUrl(`${BASE_URL}/movie//popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${page}`)
        if (classNamePrefix === "search-results") setUrl(`${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchText}&page=${page}`)
    }

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={handleNext}
            hasMore={hasMore} 
            loader={<h4>Loading...</h4>}
            endMessage={data.length ? <p>No more movies</p> : <p>No results</p>}
        >
            <ul className={(classNamePrefix === "home" ? "home-page__popular-list" : "search-results-page__list") + " card-grid"}>
                {moviesListHTML}
            </ul>
        </InfiniteScroll>
    )
}

export default InfiniteScrollMoviesList