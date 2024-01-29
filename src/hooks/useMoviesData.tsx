import { MovieDetails, useMovieDetails } from "../services/tmdb"

export default function useMoviesData(movieIds: string[] | undefined) {
  const moviesData: MovieDetails[] = []

  if (movieIds !== undefined && movieIds.length !== 0) {
    movieIds.forEach((movieId) => {
      const { data } = useMovieDetails(movieId)
      data && moviesData.push(data)
    })
  }

  return { moviesData }
}
