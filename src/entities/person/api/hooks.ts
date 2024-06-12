import { useQuery } from "@tanstack/react-query"
import { fetchMovieCredits, fetchPersonDetails } from "./requests"

export const useMovieCreditsQuery = (movieId: string) =>
  useQuery({
    queryKey: ["credits", movieId],
    queryFn: () => fetchMovieCredits(movieId),
  })

export const usePersonDetailsQuery = (personId: string) =>
  useQuery({
    queryKey: ["person", personId],
    queryFn: () => fetchPersonDetails(personId),
  })
