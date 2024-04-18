import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "./endPoints"

/**
 * Returns the current user, or null if no user is signed in.
 * The data is cached indefinitely (`staleTime: Infinity`).
 */
export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  })
}
