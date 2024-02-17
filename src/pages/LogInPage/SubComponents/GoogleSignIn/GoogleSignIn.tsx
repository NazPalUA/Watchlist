import { signInWithPopup } from "firebase/auth"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../../context/AuthContext"
import { auth, provider } from "../../../../services/firebase/firebase-config"
import style from "./GoogleSignIn.module.scss"

type GoogleSignInProps = {}

export default function GoogleSignIn({}: GoogleSignInProps) {
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"
  let authContext = useAuthContext()

  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, provider)

      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      }
      authContext.signin(authInfo, () => {
        navigate(from, { replace: true })
      })
    } catch (error) {
      console.error("Error signing in with Google: ", error)
      // Handle error here
    }
  }

  return (
    <button className={style.googleButton} onClick={signInWithGoogle}>
      <img
        src="https://img.icons8.com/color/48/000000/google-logo.png"
        alt="Google logo"
      />
      <span>Sign in with Google</span>
    </button>
  )
}
