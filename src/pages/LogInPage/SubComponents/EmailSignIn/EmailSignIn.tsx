import { useLocation, useNavigate } from "react-router-dom"
import { signInWithEmail } from "../../../../services/firebase/firebase-auth"
import style from "./EmailSignIn.module.scss"

type EmailSignInProps = {}

export default function EmailSignIn({}: EmailSignInProps) {
  let navigate = useNavigate()
  let location = useLocation()

  let from = location.state?.from?.pathname || "/"

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget)
    let email = formData.get("email") as string
    let password = formData.get("password") as string

    signInWithEmail(email, password).then(() => {
      navigate(from, { replace: true })
    })
  }
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
      </div>

      <button className={style.submitBtn} type="submit">
        Log In
      </button>
    </form>
  )
}
