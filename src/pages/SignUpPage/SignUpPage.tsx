import UserAuth from "../../components/UserAuth"
import style from "./SignUpPage.module.scss"

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
      <UserAuth type="signup" />
    </div>
  )
}
