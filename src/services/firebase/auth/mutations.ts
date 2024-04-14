import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigateBack } from "../../../hooks/useNavigateBack"
import { signInWithProvider } from "./firebase-auth"
import { SocialMediaProvider } from "./types"

export function useAuthWithSocialMediaMutation(provider: SocialMediaProvider) {
  const navigateBack = useNavigateBack()

  async function signIn() {
    return await signInWithProvider(provider)
  }

  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => signIn(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] })
      navigateBack()
    },
  })
}
