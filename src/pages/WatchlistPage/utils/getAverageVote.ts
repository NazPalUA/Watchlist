import { MovieDetails } from "../../../services/tmdb"

export default function getAverageVote(movies: MovieDetails[]) {
  if (!movies) {
    return null
  }
  const moviesWithScoreData = movies.filter((movie) => movie.vote_average > 0)
  const totalVotes = moviesWithScoreData.reduce(
    (acc, movie) => acc + movie.vote_average,
    0
  )
  return Math.round((totalVotes / moviesWithScoreData.length) * 10)
}
