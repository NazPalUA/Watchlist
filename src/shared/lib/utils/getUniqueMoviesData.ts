import { Movie, MovieDetails, Recommendation } from "../../api/tmdb/model"

export default function getUniqueMoviesData(
  moviesData: (Movie | MovieDetails | Recommendation)[]
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
