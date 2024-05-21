import style from "./UserAuth.module.scss"
import AuthWithSocialMedia from "./ui/AuthWithSocialMedia/AuthWithSocialMedia"
import EmailLogIn from "./ui/EmailLogIn"
import EmailSignUp from "./ui/EmailSignUp"
import RedirectLink from "./ui/RedirectLink/RedirectLink"

export type UserAuthProps = { type: "login" | "signup" }

export function UserAuth({ type }: UserAuthProps) {
  const AuthForm = () => (type === "login" ? <EmailLogIn /> : <EmailSignUp />)

  return (
    <div className={style.authWrapper}>
      <AuthForm />
      <RedirectLink type={type} />
      <p style={{ textAlign: "center" }}>or</p>
      <AuthWithSocialMedia />
    </div>
  )
}
