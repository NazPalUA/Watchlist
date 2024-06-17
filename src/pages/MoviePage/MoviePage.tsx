"use client"

import { useEffect } from "react"
import { MovieDetails, useMovieDetailsQuery } from "../../entities/movie"
import { Cast } from "../../entities/person"
import { useHistoryContext } from "../../shared/context"
import { ErrorMessage } from "../../shared/ui/ErrorMessage"
import Loader from "../../shared/ui/Loader"
import { RelatedMovies } from "../../widgets/RelatedMovies"

type MoviePagePropTypes = {
  className?: string
  movieId: string
}

export default function MoviePage({ className, movieId }: MoviePagePropTypes) {
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
