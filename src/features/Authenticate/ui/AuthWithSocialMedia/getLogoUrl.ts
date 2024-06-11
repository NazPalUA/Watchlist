import type { SocialMediaProvider } from "../../../../entities/session"

export default function getLogoUrl(provider: SocialMediaProvider) {
  switch (provider) {
    case "google":
      return "https://img.icons8.com/color/48/000000/google-logo.png"
    case "facebook":
      return "https://img.icons8.com/color/48/000000/facebook-new.png"
    case "github":
      return "https://img.icons8.com/color/48/000000/github--v1.png"
  }
}
