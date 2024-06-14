"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./AsideNavLink.module.scss"

type AsideNavLinkProps = {
  icon: string
  text: string
  to: string
  className?: string
  style?: React.CSSProperties
}

export function AsideNavLink({
  className = "",
  icon,
  text,
  to,
  style,
}: AsideNavLinkProps) {
  const mainClass = `${styles.link} ${className}`
  const pathname = usePathname()
  const isActive = pathname?.startsWith(to)
  return (
    <Link
      className={`${mainClass}${isActive ? ` ${styles.active}` : ""}`.trim()}
      href={to}
      style={style || {}}
    >
      <img alt={text} src={icon} />
      <span>{text}</span>
    </Link>
  )
}
