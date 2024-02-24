import { Link } from "react-router-dom"
import style from "./SignUpWithEmailPage.module.scss"
import SignUpWithEmailForm from "./SubComponents/SignUpWithEmailForm/SignUpWithEmailForm/SignUpWithEmailForm"

type SignUpWithEmailPageProps = { className?: string }

export type UserDataType = {
  name: string
  email: string
  password: string
}

export default function SignUpWithEmailPage({
  className,
}: SignUpWithEmailPageProps) {
  return (
    <div className={`${className} ${style.profile}`}>
      <h4 className={`${style.title}`}>
        Create an account to use the features of this app
      </h4>
      <SignUpWithEmailForm />
      <p className={style.linkWrapper}>
        <span>or </span>
        <Link className={style.link} to="/login">
          Log in an account
        </Link>
      </p>
    </div>
  )
}
