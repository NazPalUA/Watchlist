import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AddUserData, EditUserData } from "../../model/types"
import { queryKeys } from "../queryKeys"
import { addUserData, editUserData } from "./requests"

const { USER } = queryKeys

// Custom hook to add user data
export const useAddUserData = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: AddUserData }) =>
      addUserData(userId, data),
    onSuccess: (_, { userId }) => {
      queryClient.invalidateQueries({
        queryKey: USER(userId),
      })
    },
  })
}

// Custom hook to edit user data
export const useEditUserData = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: EditUserData }) =>
      editUserData(userId, data),
    onSuccess: (_, { userId }) => {
      queryClient.invalidateQueries({
        queryKey: USER(userId),
      })
    },
  })
}
