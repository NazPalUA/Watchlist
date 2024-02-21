import { AuthErrorCodes } from "firebase/auth"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../../context/AuthContext"
import style from "./EmailSignIn.module.scss"

type EmailSignInProps = {}

export default function EmailSignIn({}: EmailSignInProps) {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuthContext()

  let from = location.state?.from?.pathname || "/"

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget)
    let email = formData.get("email") as string
    let password = formData.get("password") as string

    auth.emailPasswordSignIn({ email, password }, () =>
      navigate(from, { replace: true })
    )
  }
  const error = auth.emailPasswordError

  const wrongPassword =
    error?.code === AuthErrorCodes.INVALID_PASSWORD ||
    AuthErrorCodes.INVALID_APP_CREDENTIAL
  console.log(AuthErrorCodes.INVALID_PASSWORD)

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.formGroup}>
        <label className={style.textLabel} htmlFor="email">
          Email
        </label>
        <input
          className={style.textInput}
          type="email"
          id="email"
          name="email"
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.textLabel} htmlFor="password">
          Password
        </label>
        <input
          className={style.textInput}
          type="password"
          id="password"
          name="password"
        />
        {wrongPassword && (
          <p className={style.errorText}>
            The password is invalid or the user does not have a password.
          </p>
        )}
      </div>

      <button className={style.submitBtn} type="submit">
        Log In
      </button>
    </form>
  )
}
