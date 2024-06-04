import { useQuery } from "@tanstack/react-query"
import {
  getMovieRecommendations,
  getPopularMovies,
} from "../../../entities/movie/api/requests"
import { getUniqueMovies } from "../../../shared/api/tmdb"

export const useRelatedMovies = (movieId: string, length: number) =>
  useQuery({
    queryKey: ["movies", "related", movieId],
    queryFn: async () => {
      let recommendedPage = 1
      let recommendedMovies = await getMovieRecommendations(
        movieId,
        recommendedPage
      )
      let uniqueRecommendedMovies = getUniqueMovies(recommendedMovies.results)

      while (
        uniqueRecommendedMovies.length < length &&
        recommendedMovies.total_pages > recommendedPage
      ) {
        recommendedPage++
        recommendedMovies = await getMovieRecommendations(
          movieId,
          recommendedPage
        )
        uniqueRecommendedMovies = getUniqueMovies([
          ...uniqueRecommendedMovies,
          ...recommendedMovies.results,
        ])
      }

      let popularPage = 1
      let popularMovies = await getPopularMovies(popularPage)

      while (
        uniqueRecommendedMovies.length < length &&
        popularMovies.total_pages > popularPage
      ) {
        popularPage++
        popularMovies = await getPopularMovies(popularPage)
        uniqueRecommendedMovies = getUniqueMovies([
          ...uniqueRecommendedMovies,
          ...popularMovies.results,
        ])
      }

      return uniqueRecommendedMovies.slice(0, length)
    },
  })
