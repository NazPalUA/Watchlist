"use client"

import { useRef, useState } from "react"
import { useOutsideClick } from "../../lib/useOutsideClick"
import { DropdownContent } from "../DropdownContent/DropdownContent"
import style from "./DropdownMenu.module.scss"
import guestIcon from "/images/guest_icon.svg"

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false)
  })

  return (
    <nav className={style.container} ref={dropdownRef}>
      <img
        onClick={toggleMenu}
        className={style.img}
        src={guestIcon}
        alt="guest icon"
      />
      {isOpen && <DropdownContent closeMenu={closeMenu} />}
    </nav>
  )
}
