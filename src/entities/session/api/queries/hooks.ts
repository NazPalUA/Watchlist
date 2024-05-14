import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../queryKeys"
import { getCurrentUser } from "./requests"

/**
 * Returns the current user, or null if no user is signed in.
 * The data is cached indefinitely (`staleTime: Infinity`).
 */

const { CURRENT_USER } = queryKeys
export const useGetUserQuery = () => {
  return useQuery({
    queryKey: CURRENT_USER,
    queryFn: getCurrentUser,
    staleTime: Infinity,
  })
}
