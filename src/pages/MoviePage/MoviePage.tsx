import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistoryContext } from "../../context/HistoryContext"
import "./MoviePage.scss"
import Cast from "./SubComponents/Cast"
import MovieDetails from "./SubComponents/MovieDetails"
import RelatedMovies from "./SubComponents/RelatedMovies"

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

  return (
    <div className={`movie-page ${className}`}>
      <MovieDetails movieId={movieId} />
      <Cast movieId={movieId} />
      <RelatedMovies movieId={movieId} />
    </div>
  )
}
