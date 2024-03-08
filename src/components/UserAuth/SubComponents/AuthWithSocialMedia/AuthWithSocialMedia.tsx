import AuthButton from "./AuthButton"

type AuthWithSocialMediaProps = {}

export default function AuthWithSocialMedia({}: AuthWithSocialMediaProps) {
  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  }
  return (
    <div style={styles}>
      <AuthButton provider="google" />
      <AuthButton provider="facebook" />
      <AuthButton provider="github" />
    </div>
  )
}
