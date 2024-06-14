"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import style from "./NavLinkWithActiveClass.module.scss"

type NavLinkWithActiveClassProps = {
  children: React.ReactNode
  className?: string
  to: string
}

export function NavLinkWithActiveClass({
  children,
  className = "",
  to,
}: NavLinkWithActiveClassProps) {
  const pathname = usePathname()
  const isActive = pathname?.startsWith(to)
  return (
    <Link
      className={`${className}${isActive ? ` ${style.active}` : ""}`.trim()}
      href={to}
    >
      {children}
    </Link>
  )
}
