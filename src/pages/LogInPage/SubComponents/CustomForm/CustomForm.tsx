import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../../../context/AuthContext"
import style from "./CustomForm.module.scss"

type CustomFormProps = {}

export default function CustomForm({}: CustomFormProps) {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()

  let from = location.state?.from?.pathname || "/"

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget)
    let username = formData.get("name") as string

    auth.signin({ name: username }, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.

      navigate(from, { replace: true })
    })
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      {/* Commented out to simplify the form before implementing the logic */}
      {/* <div className={style.formGroup}>
            <label className={style.textLabel} htmlFor="email">
              Email
            </label>
            <input
              className={style.textInput}
              type="email"
              id="email"
              name="email"
            />
          </div> */}
      <div className={style.formGroup}>
        <label className={style.textLabel} htmlFor="name">
          Name
        </label>
        <input className={style.textInput} type="text" id="name" name="name" />
      </div>
      {/* Commented out to simplify the form before implementing the logic */}
      {/* <div className={style.formGroup}>
            <label className={style.textLabel} htmlFor="password">
              Password
            </label>
            <input className={style.textInput} type="password" id="password" name="password" />
          </div> */}

      <button className={style.submitBtn} type="submit">
        Log In
      </button>
    </form>
  )
}
