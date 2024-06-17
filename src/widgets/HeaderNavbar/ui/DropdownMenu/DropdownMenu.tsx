"use client"

import guestIcon from "@/public/images/guest_icon.svg"
import Image from "next/image"
import { useRef, useState } from "react"
import { useOutsideClick } from "../../lib/useOutsideClick"
import { DropdownContent } from "../DropdownContent/DropdownContent"
import style from "./DropdownMenu.module.scss"

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
      <Image
        onClick={toggleMenu}
        className={style.img}
        src={guestIcon}
        alt="guest icon"
      />
      {isOpen && <DropdownContent closeMenu={closeMenu} />}
    </nav>
  )
}
