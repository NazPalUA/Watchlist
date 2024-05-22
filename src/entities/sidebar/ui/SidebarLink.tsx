import { NavLink, NavLinkProps } from "react-router-dom"

type SidebarLinkProps = Omit<NavLinkProps, "ref"> & {
  children: React.ReactNode
  className?: string
}

export default function SidebarLink({
  children,
  className = "",
  ...rest
}: SidebarLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive ? `${className} active` : className}`.trim()
      }
      {...rest}
    >
      {children}
    </NavLink>
  )
}
