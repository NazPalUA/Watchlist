import { FiMoreHorizontal } from "react-icons/fi"
import { NavLink, NavLinkProps } from "react-router-dom"
import { useGetUserQuery } from "../../../../entities/session/api/queries/hooks"
import { useGetUserDataQuery } from "../../../../entities/user/api/queries/hooks"
import Loader from "../../../Loader"
import useManageSidebarBasedOnWindowSize from "../../hooks/useManageSidebarBasedOnWindowSize"
import style from "./UserLink.module.scss"
import guestIcon from "/images/guest_icon.svg"

type SidebarLinkProps = Omit<NavLinkProps, "ref"> & {
  className?: string
}

export default function UserLink({
  children,
  className = "",
  ...rest
}: SidebarLinkProps) {
  const { toggleSidebarIfMobile } = useManageSidebarBasedOnWindowSize()
  const { isLoading: awaitingAuth, data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid
  const { data: userData, isLoading: userDataLoading } =
    useGetUserDataQuery(userId)

  return awaitingAuth || userDataLoading ? (
    <Loader />
  ) : (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${className} ${style.active} ${style.container}`
          : `${className} ${style.container}`
      }
      onClick={() => toggleSidebarIfMobile?.()}
      {...rest}
    >
      <img className={style.img} src={guestIcon} alt="guest icon" />

      <p className={style.text}>{userData?.name || "Guest"}</p>

      <FiMoreHorizontal className={style.btnIcon} color="#e1e1e1" size={32} />
    </NavLink>
  )
}
