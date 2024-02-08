import { FiMoreHorizontal } from "react-icons/fi"
import { NavLink, NavLinkProps } from "react-router-dom"
import guestIcon from "../../../../assets/images/guest_icon.svg"
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

  return (
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
      <p className={style.text}>User</p>
      <FiMoreHorizontal className={style.btnIcon} color="#e1e1e1" size={32} />
    </NavLink>
  )
}
