import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../queryKeys"
import { fetchSessionUser } from "./requests"

/**
 * Returns the current user, or null if no user is signed in.
 * The data is cached indefinitely (`staleTime: Infinity`).
 */

const { SESSION_USER } = queryKeys
export const useSessionQuery = () => {
  return useQuery({
    queryKey: SESSION_USER,
    queryFn: fetchSessionUser,
    staleTime: Infinity,
  })
}
