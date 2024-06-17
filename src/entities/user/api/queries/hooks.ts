"use client"

import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../queryKeys"
import { getUserData } from "./requests"

const { USER } = queryKeys

export const useGetUserDataQuery = (userId: string | undefined) => {
  return useQuery({
    queryKey: USER(userId || ""),
    queryFn: () => getUserData(userId || ""),
    enabled: !!userId,
  })
}
