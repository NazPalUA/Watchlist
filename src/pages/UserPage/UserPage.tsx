import { useLogoutMutation } from "../../services/firebase/auth/mutations"
import EditUserForm from "./SubComponents/EditUserForm"
import style from "./UserPage.module.scss"

type UserPageProps = { className?: string }

export default function UserPage({ className }: UserPageProps) {
  const { mutate: logout } = useLogoutMutation()

  return (
    <div className={`${className} ${style.profile}`}>
      <div className={style.topContainer}>
        <h4 className={style.title}>Edit profile</h4>
        <button className={style.outBtn} onClick={() => logout()}>
          Log out
        </button>
      </div>
      <EditUserForm />
    </div>
  )
}
