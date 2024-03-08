import UserAuth from "../../components/UserAuth"
import style from "./LogInPage.module.scss"

type LogInPageProps = { className?: string }

export default function LogInPage({ className }: LogInPageProps) {
  return (
    <div className={`${className} ${style.container}`}>
      <h4 className={style.title}>Log in to use the features of this app</h4>
      <UserAuth type="login" />
    </div>
  )
}
