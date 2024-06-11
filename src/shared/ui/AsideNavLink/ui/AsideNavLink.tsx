import { NavLink, NavLinkProps } from "react-router-dom"
import styles from "./AsideNavLink.module.scss"

type AsideNavLinkProps = Omit<NavLinkProps, "ref"> & {
  icon: string
  text: string
  className?: string
}

export function AsideNavLink({
  className = "",
  icon,
  text,
  ...rest
}: AsideNavLinkProps) {
  const mainClass = `${styles.link} ${className}`
  return (
    <NavLink
      className={({ isActive }) =>
        `${mainClass}${isActive ? ` ${styles.active}` : ""}`.trim()
      }
      {...rest}
    >
      <img alt={text} src={icon} />
      <span>{text}</span>
    </NavLink>
  )
}
