import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useNavigateBack } from "../../../../shared/lib"
import { useAddUserData } from "../../../user"
import { queryKeys } from "../queryKeys"
import {
  authWithEmailAndPassword,
  signInWithProvider,
  signOut,
} from "./requests"

const { SESSION_USER } = queryKeys

export const useSignInWithProviderMutation = () => {
  const navigateBack = useNavigateBack()
  const queryClient = useQueryClient()

  const { mutate: addDataToStore } = useAddUserData()
  return useMutation({
    mutationFn: signInWithProvider,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: SESSION_USER,
      })
      addDataToStore({
        userId: data.uid,
        data: {
          name: data.displayName || "",
          email: data.email || "",
          photoURL: data.photoURL || "",
        },
      })
      navigateBack()
    },
  })
}

export const useAuthWithEmailAndPasswordMutation = () => {
  const navigateBack = useNavigateBack()
  const queryClient = useQueryClient()
  const { mutate: addDataToStore } = useAddUserData()
  return useMutation({
    mutationFn: authWithEmailAndPassword,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: SESSION_USER,
      })
      addDataToStore({
        userId: data.uid,
        data: {
          name: data.displayName || "",
          email: data.email || "",
          photoURL: data.photoURL || "",
        },
      })
      navigateBack()
    },
  })
}

export const useLogoutMutation = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      router.push("/")
    },
    onSettled: () => {
      queryClient.clear()
    },
  })
}
