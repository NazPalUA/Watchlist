import { NavLink } from "react-router-dom"
import {
  useLogoutMutation,
  useSessionQuery,
} from "../../../../entities/session"
import { useGetUserDataQuery } from "../../../../entities/user"
import Loader from "../../../../shared/ui/Loader"
import styles from "./DropdownMenu.module.scss"

type DropdownMenuProps = { closeMenu: () => void }

export function DropdownMenu({ closeMenu }: DropdownMenuProps) {
  const { isLoading: awaitingAuth, data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid

  const { data: userData, isLoading: userDataLoading } =
    useGetUserDataQuery(userId)

  const { mutate: logout } = useLogoutMutation()

  const handleLogout = () => {
    logout()
    closeMenu()
  }

  if (awaitingAuth || userDataLoading) return <Loader />

  return (
    <div className={styles.dropdownMenu}>
      <p className={styles.name}>{userData?.name || "Guest"}</p>
      {currentUser && (
        <NavLink
          onClick={closeMenu}
          to={!currentUser ? "/login" : "/user"}
          className={styles.link}
        >
          Settings
        </NavLink>
      )}
      {currentUser ? (
        <button
          className={`${styles.outBtn} ${styles.link}`}
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <NavLink onClick={closeMenu} to="/login" className={styles.link}>
          Login
        </NavLink>
      )}
    </div>
  )
}
