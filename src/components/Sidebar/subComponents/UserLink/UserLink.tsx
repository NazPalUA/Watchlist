import { FiMoreHorizontal } from "react-icons/fi"
import { NavLink, NavLinkProps } from "react-router-dom"
import guestIcon from "../../../../assets/images/guest_icon.svg"
import { useGetUserDataQuery } from "../../../../services/firebase/firestore/queries/queries"
import CustomLoader from "../../../CustomLoader"
import useManageSidebarBasedOnWindowSize from "../../hooks/useManageSidebarBasedOnWindowSize"
import style from "./UserLink.module.scss"

type SidebarLinkProps = Omit<NavLinkProps, "ref"> & {
  className?: string
}

export default function UserLink({
  children,
  className = "",
  ...rest
}: SidebarLinkProps) {
  const { toggleSidebarIfMobile } = useManageSidebarBasedOnWindowSize()

  const { data: userData, isPending } = useGetUserDataQuery()
  console.log(isPending)
  console.log(userData)

  return isPending ? (
    <CustomLoader />
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
