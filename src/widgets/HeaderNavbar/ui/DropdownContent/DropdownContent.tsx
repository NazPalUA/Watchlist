"use client"

import Link from "next/link"
import {
  useLogoutMutation,
  useSessionQuery,
} from "../../../../entities/session"
import { useGetUserDataQuery } from "../../../../entities/user"
import Loader from "../../../../shared/ui/Loader"
import styles from "./DropdownContent.module.scss"

type DropdownContentProps = { closeMenu: () => void }

export function DropdownContent({ closeMenu }: DropdownContentProps) {
  const { data: currentUser } = useSessionQuery()
  const userId = currentUser?.uid

  const { data: userData, isLoading } = useGetUserDataQuery(userId)

  const { mutate: logout } = useLogoutMutation()
  const handleLogout = () => {
    logout()
    closeMenu()
  }

  const content = isLoading ? (
    <Loader />
  ) : (
    <>
      <p className={styles.name}>{userData?.name || "Guest"}</p>
      {currentUser ? (
        <>
          <Link
            onClick={closeMenu}
            href={!currentUser ? "/login" : "/user"}
            className={styles.link}
          >
            Settings
          </Link>
          <button
            className={`${styles.outBtn} ${styles.link}`}
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <Link onClick={closeMenu} href="/login" className={styles.link}>
          Login
        </Link>
      )}
    </>
  )

  return <div className={styles.dropdownMenu}>{content}</div>
}
