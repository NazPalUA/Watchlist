import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { app } from "./firebase-config"

export const auth = getAuth(app)

export const googleAuthProvider = new GoogleAuthProvider()

export function useSignInWithGoogle() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      const userCredential = await signInWithPopup(auth, googleAuthProvider)
      console.log("userCredential", userCredential)
      return userCredential
    },

    onSuccess: () => {
      console.log("Google Sign In Success")
      queryClient.invalidateQueries({ queryKey: ["Google Sign"] })
    },
  })
}

type LoginEmailPasswordType = { email: string; password: string }
export function useLoginEmailPassword() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ email, password }: LoginEmailPasswordType) => {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      return userCredential
    },

    onSuccess: () => {
      console.log("Email and Password Sign In Success")
      queryClient.invalidateQueries({ queryKey: ["EmailPassword Sign"] })
    },
  })
}
