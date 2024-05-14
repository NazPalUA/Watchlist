import { useSignInWithProviderMutation } from "../../../../entities/session/api/mutations/hooks"
import { SocialMediaProvider } from "../../../../entities/session/model/types"
import ErrorMessage from "../../../ErrorMessage/ErrorMessage"
import style from "./AuthButton.module.scss"
import getLogoUrl from "./getLogoUrl"

type AuthButtonProps = {
  provider: SocialMediaProvider
}

export default function AuthButton({ provider }: AuthButtonProps) {
  const {
    mutate: authWithSocialMedia,
    isError,
    error,
  } = useSignInWithProviderMutation()

  const buttonText = `Continue with ${
    provider.charAt(0).toUpperCase() + provider.slice(1)
  }`

  const logoUrl = getLogoUrl(provider)

  return (
    <>
      <button
        className={style.button}
        onClick={() => authWithSocialMedia(provider)}
      >
        <img src={logoUrl} alt={`${provider} logo`} />
        <span>{buttonText}</span>
      </button>
      {isError && (
        <ErrorMessage error={error} isPopup={true}>
          Something went wrong. Please try again later.
        </ErrorMessage>
      )}
    </>
  )
}
