import { NavLink } from "react-router-dom"
import {
  useLogoutMutation,
  useSessionQuery,
} from "../../../../entities/session"
import { useGetUserDataQuery } from "../../../../entities/user"
import Loader from "../../../../shared/ui/Loader"
import styles from "./DropdownMenu.module.scss"

type DropdownMenuProps = {}

export function DropdownMenu({}: DropdownMenuProps) {
  const { isLoading: awaitingAuth, data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid
  const { data: userData, isLoading: userDataLoading } =
    useGetUserDataQuery(userId)
  const { mutate: logout } = useLogoutMutation()

  if (awaitingAuth || userDataLoading) return <Loader />

  return (
    <div className={styles.dropdownMenu}>
      <p className={styles.name}>{userData?.name || "Guest"}</p>
      {currentUser && (
        <NavLink to={!currentUser ? "/login" : "/user"} className={styles.link}>
          Settings
        </NavLink>
      )}
      {currentUser ? (
        <button
          className={`${styles.outBtn} ${styles.link}`}
          onClick={() => logout()}
        >
          Logout
        </button>
      ) : (
        <NavLink to="/login" className={styles.link}>
          Login
        </NavLink>
      )}
    </div>
  )
}
