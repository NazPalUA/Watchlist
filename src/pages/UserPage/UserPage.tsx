import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import EditUserForm from "./SubComponents/EditUserForm/EditUserForm"
import style from "./UserPage.module.scss"

type UserPageProps = { className?: string }

export default function UserPage({ className }: UserPageProps) {
  let navigate = useNavigate()
  const { logout } = useAuth()

  function handleLogOut() {
    logout().then(() => navigate("/"))
  }

  return (
    <div className={`${className} ${style.profile}`}>
      <div className={style.topContainer}>
        <h4 className={style.title}>Edit profile</h4>
        <button className={style.outBtn} onClick={() => handleLogOut()}>
          Log out
        </button>
      </div>
      <EditUserForm />
    </div>
  )
}
