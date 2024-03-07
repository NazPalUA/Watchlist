import { useAuthWithSocialMediaMutation } from "../../services/firebase/auth/mutations"
import { SocialMediaProvider } from "../../services/firebase/auth/types"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import style from "./AuthWithSocialMedia.module.scss"
import getLogoUrl from "./utils/getLogoUrl"

type AuthWithSocialMediaProps = {
  provider: SocialMediaProvider
}

export default function AuthWithSocialMedia({
  provider,
}: AuthWithSocialMediaProps) {
  const {
    mutate: authWithSocialMedia,
    isError,
    error,
  } = useAuthWithSocialMediaMutation(provider)

  const buttonText = `Continue with ${
    provider.charAt(0).toUpperCase() + provider.slice(1)
  }`

  const logoUrl = getLogoUrl(provider)

  return (
    <>
      <button className={style.button} onClick={() => authWithSocialMedia()}>
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
