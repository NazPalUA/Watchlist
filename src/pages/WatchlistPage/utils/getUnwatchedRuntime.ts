import { MovieDetails } from "../../../services/tmdb"

// Calculate the total unwatched runtime of the movies in the watchlist
export default function getUnwatchedRuntime(movies: MovieDetails[]) {
  const unwatchedRuntime = movies.reduce((acc, movie) => acc + movie.runtime, 0)
  const unwatchedHours = Math.floor(unwatchedRuntime / 60)
  const unwatchedMinutes = unwatchedRuntime % 60
  return `${unwatchedHours}h ${unwatchedMinutes}m`
}
