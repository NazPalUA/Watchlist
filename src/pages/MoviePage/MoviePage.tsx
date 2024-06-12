import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { MovieDetails, useMovieDetailsQuery } from "../../entities/movie"
import { Cast } from "../../entities/person"
import { useHistoryContext } from "../../shared/context"
import { ErrorMessage } from "../../shared/ui/ErrorMessage"
import Loader from "../../shared/ui/Loader"
import { RelatedMovies } from "../../widgets/RelatedMovies"

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
  } = useMovieDetailsQuery(movieId)

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
