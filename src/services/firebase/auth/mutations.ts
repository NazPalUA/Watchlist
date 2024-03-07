import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useLocation, useNavigate } from "react-router-dom"
import { signInWithProvider } from "./firebase-auth"
import { SocialMediaProvider } from "./types"

export function useAuthWithSocialMediaMutation(provider: SocialMediaProvider) {
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"

  async function signIn() {
    return await signInWithProvider(provider)
  }

  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => signIn(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] })
      navigate(from, { replace: true })
    },
  })
}
