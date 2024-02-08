import { useSearchParams } from "react-router-dom"
import CustomForm from "./SubComponents/CustomForm/CustomForm"
import style from "./UserPage.module.scss"

type UserPageProps = { className?: string }

export default function UserPage({ className }: UserPageProps) {
  // Get the action parameter from the search params
  const [searchParams] = useSearchParams()
  const action = searchParams?.get("action") as "create" | "update"

  // Determine the title and button visibility based on the action
  const title =
    action === "create"
      ? "Create an account to use the features of this app"
      : "Edit profile"
  const showLogoutButton = action === "update"

  return (
    <div className={`${className} ${style.profile}`}>
      <div className={style.topContainer}>
        <h4
          className={`${style.title} ${
            action === "create" ? style.maxWidth100 : ""
          }`}
        >
          {title}
        </h4>
        {showLogoutButton && <button className={style.outBtn}>Log out</button>}
      </div>
      <CustomForm />
    </div>
  )
}
