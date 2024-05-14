import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistoryContext } from "../../app/context/HistoryContext"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import Loader from "../../components/Loader"
import { useMovieDetails } from "../../shared/API/tmdb"

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

  if (isMovieDataLoading) return <Loader />
  else if (isMovieDataError || !movieData)
    return (
      <ErrorMessage error={movieDataError}>
        Error Loading Movie! Please try again later
      </ErrorMessage>
    )

  return (
    <div className={className}>
      <MovieDetails movieData={movieData} />
      <Cast movieId={movieId} />
      <RelatedMovies movieId={movieId} />
    </div>
  )
}
