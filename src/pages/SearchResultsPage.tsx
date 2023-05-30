import { useState, useEffect } from "react"
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link, useParams } from "react-router-dom"
import useMoviesData from "../hooks/useMoviesData"
import useMultiplePageApi from "../hooks/useMultiplePageApi"
import MovieCard from "../components/MovieCard"
import './SearchResultsPage.scss'

type SearchResultsPagePropTypes = {
    className?: string
}


function SearchResultsPage({className}: SearchResultsPagePropTypes) {
    // Get the search text from the URL parameter
    const { searchText } = useParams()

    // Set up state to keep track of movie IDs
    const [movieIds, setMovieIds] = useState<string[]>([])
    
    // // use the custom hook to initialize the data, hasMore, page, and setUrl variables with default values and fetches the movies data for search for the first page
    const BASE_URL = "https://api.themoviedb.org/3/search"
    const { data, hasMore, page, setUrl } = useMultiplePageApi(`${BASE_URL}/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchText}&page=1`)

    // Update movie IDs state when new data is fetched
    useEffect(() => setMovieIds(data ? data.map(i => i.id) : []), [data])
    
    // Call the custom hook to fetch detailed movie data
    const {moviesData} = useMoviesData(movieIds)

    // Map over movie data and render each movie card as a list item
    const searchListHTML = moviesData.map(movie => {
        return (
            <li className="search-results-page__item"
                key={movie.id}
            >
                <Link to={`/movie-page/${movie.id}`} className="search-results-page__link">
                    <MovieCard
                        className="search-results-page__movie-card"
                        movieId={movie.id}
                        title={movie.title}
                        path={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : undefined}
                        year={movie.release_date.slice(0, 4)}
                        rating={Math.round(movie.vote_average * 10)}
                    />
                </Link>
            </li>
        )
    })

    return (
        <div className={`search-results-page ${className}`}>
            <h4 className="search-results-page__header">
                Search Results: {searchText}
            </h4>
                <InfiniteScroll
                    dataLength={movieIds.length}
                    next={()=>setUrl(`${BASE_URL}/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchText}&page=${page}`)}
                    hasMore={hasMore} 
                    loader={<h4>Loading...</h4>}
                    endMessage={movieIds.length ? <p>No more movies</p> : <p>No results</p>}
            >
                <ul className="search-results-page__list card-grid">{searchListHTML}</ul>
            </InfiniteScroll>
        </div>
    )
}

export default SearchResultsPage