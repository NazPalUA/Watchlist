import { useLocation, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../../context/AuthContext"
import style from "./GoogleSignIn.module.scss"

type GoogleSignInProps = {}

export default function GoogleSignIn({}: GoogleSignInProps) {
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"
  let authContext = useAuthContext()

  function handleSubmit() {
    authContext.googleSignIn(() => {
      navigate(from, { replace: true })
    })
  }

  return (
    <button className={style.googleButton} onClick={handleSubmit}>
      <img
        src="https://img.icons8.com/color/48/000000/google-logo.png"
        alt="Google logo"
      />
      <span>Sign in with Google</span>
    </button>
  )
}
