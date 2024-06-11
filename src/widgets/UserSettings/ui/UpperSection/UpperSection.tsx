import { useLogoutMutation } from "../../../../entities/session"
import style from "./UpperSection.module.scss"

export function UpperSection() {
  const { mutate: logout } = useLogoutMutation()
  return (
    <div className={style.topContainer}>
      <h4 className={style.title}>Edit profile</h4>
      <button className={style.outBtn} onClick={() => logout()}>
        Log out
      </button>
    </div>
  )
}
