import { useQuery } from "@tanstack/react-query"
import { getMovieCredits, getPersonDetails } from "./requests"

export const useMovieCredits = (movieId: string) =>
  useQuery({
    queryKey: ["credits", movieId],
    queryFn: () => getMovieCredits(movieId),
  })

export const usePersonDetails = (personId: string) =>
  useQuery({
    queryKey: ["person", personId],
    queryFn: () => getPersonDetails(personId),
  })
