import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { useNavigateBack } from "../../../hooks/useNavigateBack"
import { useAddUserData } from "../firestore/mutations/mutations"
import {
  authWithEmailAndPassword,
  signInWithProvider,
  signOut,
  updateDisplayName,
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
        name: data.displayName || "",
        photoURL: data.photoURL || "",
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
        name: data.displayName || "",
        photoURL: data.photoURL || "",
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
      queryClient.setQueryData(["currentUser"], null)
      navigate("/")
    },
  })
}

export const useUpdateDisplayNameMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateDisplayName,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["currentUser"],
      })
    },
  })
}
