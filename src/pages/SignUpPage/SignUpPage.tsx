import { Link } from "react-router-dom"
import AuthWithSocialMedia from "../../components/AuthWithSocialMedia/AuthWithSocialMedia"
import style from "./SignUpPage.module.scss"
import SignUpWithEmailForm from "./SubComponents/SignUpWithEmailForm/SignUpWithEmailForm/SignUpWithEmailForm"

type SignUpPageProps = { className?: string }

export type UserDataType = {
  name: string
  email: string
  password: string
}

export default function SignUpPage({ className }: SignUpPageProps) {
  return (
    <div className={`${className} ${style.profile}`}>
      <h4 className={`${style.title}`}>
        Create an account to use the features of this app
      </h4>
      <SignUpWithEmailForm />
      <p className={style.linkWrapper}>
        <span>Already have an account?</span>
        <Link className={style.link} to="/login">
          Log in
        </Link>
      </p>
      <p style={{ textAlign: "center" }}>or</p>
      <AuthWithSocialMedia provider="google" />
      <AuthWithSocialMedia provider="facebook" />
      <AuthWithSocialMedia provider="github" />
    </div>
  )
}
