"use client"

import { useEffect } from "react"
import { MovieDetails, useMovieDetailsQuery } from "../../entities/movie"
import { useHistoryContext } from "../../shared/context"
import { ErrorMessage } from "../../shared/ui/ErrorMessage"
import Loader from "../../shared/ui/Loader"

export function Details({ movieId }: { movieId: string }) {
  // useEffect hook to add current movieId to history array in HistoryContext
  const { addToHistory } = useHistoryContext()
  useEffect(() => addToHistory(movieId), [])

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

  return <MovieDetails movieData={movieData} />
}
