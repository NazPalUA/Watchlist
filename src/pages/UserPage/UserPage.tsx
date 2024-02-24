import { useNavigate } from "react-router-dom"
import { signOut } from "../../services/firebase/firebase-auth"
import CustomForm from "./SubComponents/CustomForm/CustomForm"
import style from "./UserPage.module.scss"

type UserPageProps = { className?: string }

export default function UserPage({ className }: UserPageProps) {
  let navigate = useNavigate()

  function handleLogOut() {
    signOut().then(() => navigate("/"))
  }

  return (
    <div className={`${className} ${style.profile}`}>
      <div className={style.topContainer}>
        <h4 className={style.title}>Edit profile</h4>

        <button className={style.outBtn} onClick={() => handleLogOut()}>
          Log out
        </button>
      </div>
      <CustomForm />
    </div>
  )
}
