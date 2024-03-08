import AuthWithSocialMedia from "./SubComponents/AuthWithSocialMedia/AuthWithSocialMedia"
import EmailLogIn from "./SubComponents/EmailLogIn/EmailLogIn"
import EmailSignUp from "./SubComponents/EmailSignUp/EmailSignUp"
import RedirectLink from "./SubComponents/RedirectLink/RedirectLink"
import style from "./UserAuth.module.scss"

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
