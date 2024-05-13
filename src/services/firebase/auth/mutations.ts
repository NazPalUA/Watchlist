import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { useNavigateBack } from "../../../shared/hooks/useNavigateBack"
import { useAddUserData } from "../firestore/mutations/mutations"
import {
  authWithEmailAndPassword,
  signInWithProvider,
  signOut,
} from "./endPoints"

export const useSignInWithProviderMutation = () => {
  const navigateBack = useNavigateBack()
  const queryClient = useQueryClient()

  const { mutate: addDataToStore } = useAddUserData()
  return useMutation({
    mutationFn: signInWithProvider,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["currentUser"],
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
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["currentUser"],
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
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate("/")
    },
    onSettled: () => {
      queryClient.setQueryData(["currentUser"], null)
      queryClient.setQueryData(["userData"], null)
      queryClient.clear()
    },
  })
}
