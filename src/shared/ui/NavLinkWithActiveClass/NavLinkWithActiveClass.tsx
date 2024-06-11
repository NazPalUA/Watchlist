import { NavLink, NavLinkProps } from "react-router-dom"
import style from "./NavLinkWithActiveClass.module.scss"

type NavLinkWithActiveClassProps = Omit<NavLinkProps, "ref"> & {
  children: React.ReactNode
  className?: string
}

export function NavLinkWithActiveClass({
  children,
  className = "",
  ...rest
}: NavLinkWithActiveClassProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${className}${isActive ? ` ${style.active}` : ""}`.trim()
      }
      {...rest}
    >
      {children}
    </NavLink>
  )
}
