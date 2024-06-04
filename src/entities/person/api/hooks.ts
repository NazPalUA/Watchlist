import { useQuery } from "@tanstack/react-query"
import { fetchMovieCredits, fetchPersonDetails } from "./requests"

export const useMovieCredits = (movieId: string) =>
  useQuery({
    queryKey: ["credits", movieId],
    queryFn: () => fetchMovieCredits(movieId),
  })

export const usePersonDetails = (personId: string) =>
  useQuery({
    queryKey: ["person", personId],
    queryFn: () => fetchPersonDetails(personId),
  })
