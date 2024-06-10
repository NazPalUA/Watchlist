import { useRef, useState } from "react"
import { useOutsideClick } from "../../lib/useOutsideClick"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu"
import style from "./UserLink.module.scss"
import guestIcon from "/images/guest_icon.svg"

export function UserLink() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
      {isOpen && <DropdownMenu />}
    </nav>
  )
}
