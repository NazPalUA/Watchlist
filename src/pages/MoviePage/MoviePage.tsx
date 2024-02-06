import { useEffect } from "react"
import { useParams } from "react-router-dom"
import CustomLoader from "../../components/CustomLoader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { useHistoryContext } from "../../context/HistoryContext"
import { useMovieDetails } from "../../services/tmdb"
import "./MoviePage.scss"
import Cast from "./SubComponents/Cast/Cast"
import MovieDetails from "./SubComponents/MovieDetails/MovieDetails"
import RelatedMovies from "./SubComponents/RelatedMovies/RelatedMovies"

type MoviePagePropTypes = {
  className?: string
}

export default function MoviePage({ className }: MoviePagePropTypes) {
  // useParams hook to get the movieId from the URL parameter
  const { movieId } = useParams()
  if (!movieId) return <div>Error</div>

  // useEffect hook to add current movieId to history array in HistoryContext
  const { addToHistory } = useHistoryContext()
  useEffect(() => addToHistory(movieId), [movieId])

  const {
    data: movieData,
    isLoading: isMovieDataLoading,
    isError: isMovieDataError,
    error: movieDataError,
  } = useMovieDetails(movieId)

  if (isMovieDataLoading) return <CustomLoader />
  else if (isMovieDataError || !movieData)
    return (
      <ErrorMessage error={movieDataError}>
        Error Loading Movie! Please try again later
      </ErrorMessage>
    )

  return (
    <div className={`movie-page ${className}`}>
      <MovieDetails movieData={movieData} />
      <Cast movieId={movieId} />
      <RelatedMovies movieId={movieId} />
    </div>
  )
}
