"use client"

import { useSidebarContext } from "../../../../shared/context"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu"
import Logo from "../Logo/Logo"
import { StaticBurger } from "../StaticBurger/StaticBurger"
import styles from "./HeaderNavbar.module.scss"

export function HeaderNavbar() {
  const { toggleSidebar } = useSidebarContext()
  return (
    <nav className={styles.navbar}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <StaticBurger toggle={toggleSidebar} />
        <Logo />
      </div>
      <DropdownMenu />
    </nav>
  )
}
