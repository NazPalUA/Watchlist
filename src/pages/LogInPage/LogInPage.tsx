import { Link } from "react-router-dom"
import style from "./LogInPage.module.scss"
import GoogleSignIn from "./SubComponents/GoogleSignIn/GoogleSignIn"

type LogInPageProps = { className?: string }

export default function LogInPage({ className }: LogInPageProps) {
  return (
    <div className={`${className} ${style.container}`}>
      <h4 className={style.title}>
        Hello!
        <br />
        Please log in or create an account to use the features of this app
      </h4>

      <GoogleSignIn />

      <p className={style.linkWrapper}>
        <span>or </span>
        <Link className={style.link} to="/user">
          Create an account
        </Link>
      </p>
    </div>
  )
}
