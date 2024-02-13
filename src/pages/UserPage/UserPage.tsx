import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import CustomForm from "./SubComponents/CustomForm/CustomForm"
import style from "./UserPage.module.scss"

type UserPageProps = { className?: string }

export default function UserPage({ className }: UserPageProps) {
  let auth = useAuth()
  let navigate = useNavigate()

  // Determine the title and button visibility based on the action
  const title = !auth.user
    ? "Create an account to use the features of this app"
    : "Edit profile"
  const showLogoutButton = !auth.user ? false : true

  return (
    <div className={`${className} ${style.profile}`}>
      <div className={style.topContainer}>
        <h4 className={`${style.title} ${!auth.user ? style.maxWidth100 : ""}`}>
          {title}
        </h4>
        {showLogoutButton && (
          <button
            className={style.outBtn}
            onClick={() => {
              auth.signout(() => navigate("/"))
            }}
          >
            Log out
          </button>
        )}
      </div>
      <CustomForm />
    </div>
  )
}
