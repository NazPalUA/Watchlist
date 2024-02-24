import { useLocation, useNavigate } from "react-router-dom"
import { signInWithGoogle } from "../../../../services/firebase/firebase-auth"
import style from "./GoogleSignIn.module.scss"

type GoogleSignInProps = {}

export default function GoogleSignIn({}: GoogleSignInProps) {
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"

  function handleSubmit() {
    signInWithGoogle().then(() => {
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
