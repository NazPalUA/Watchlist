import { Movie, MovieDetails } from "../services/tmdb/types"

export default function getUniqueMoviesData(
  moviesData: Movie[] | MovieDetails[]
) {
  const uniqueIds = new Set()
  const uniqueData = moviesData.filter((movie) => {
    if (!uniqueIds.has(movie.id)) {
      uniqueIds.add(movie.id)
      return true
    }
    return false
  })

  return uniqueData
}
