"use client"

import Image from "next/image"
import type { SocialMediaProvider } from "../../../../entities/session"
import { useSignInWithProviderMutation } from "../../../../entities/session"
import { ErrorMessage } from "../../../../shared/ui/ErrorMessage"
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
        <Image src={logoUrl} alt={`${provider} logo`} width={48} height={48} />
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
