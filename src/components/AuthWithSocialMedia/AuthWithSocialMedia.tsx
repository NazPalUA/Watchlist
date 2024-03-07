import { useLocation, useNavigate } from "react-router-dom"
import {
  signInWithFacebook,
  signInWithGithub,
  signInWithGoogle,
} from "../../services/firebase/firebase-auth"
import style from "./AuthWithSocialMedia.module.scss"

type AuthWithSocialMediaProps = {
  provider: "google" | "facebook" | "github"
}

export default function AuthWithSocialMedia({
  provider,
}: AuthWithSocialMediaProps) {
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"

  function handleSubmit() {
    let signIn
    switch (provider) {
      case "google":
        signIn = signInWithGoogle
        break
      case "facebook":
        signIn = signInWithFacebook
        break
      case "github":
        signIn = signInWithGithub
        break
    }

    try {
      signIn().then(() => {
        navigate(from, { replace: true })
      })
    } catch (error) {
      console.error("Error signing in with social media", error)
    }
  }

  const buttonStyle = style[`${provider}Button`]
  const buttonText = `Continue with ${
    provider.charAt(0).toUpperCase() + provider.slice(1)
  }`

  let logoUrl
  switch (provider) {
    case "google":
      logoUrl = "https://img.icons8.com/color/48/000000/google-logo.png"
      break
    case "facebook":
      logoUrl = "https://img.icons8.com/color/48/000000/facebook-new.png"
      break
    case "github":
      logoUrl = "https://img.icons8.com/color/48/000000/github--v1.png"
      break
  }

  return (
    <button className={buttonStyle} onClick={handleSubmit}>
      <img src={logoUrl} alt={`${provider} logo`} />
      <span>{buttonText}</span>
    </button>
  )
}
