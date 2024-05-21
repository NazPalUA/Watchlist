import { NavLink, NavLinkProps } from "react-router-dom"
import useManageSidebarBasedOnWindowSize from "../../../widgets/Sidebar/hooks/useManageSidebarBasedOnWindowSize"

type SidebarLinkProps = Omit<NavLinkProps, "ref"> & {
  children: React.ReactNode
  className?: string
}

export default function SidebarLink({
  children,
  className = "",
  ...rest
}: SidebarLinkProps) {
  const { toggleSidebarIfMobile } = useManageSidebarBasedOnWindowSize()

  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive ? `${className} active` : className}`.trim()
      }
      onClick={() => toggleSidebarIfMobile?.()}
      {...rest}
    >
      {children}
    </NavLink>
  )
}
