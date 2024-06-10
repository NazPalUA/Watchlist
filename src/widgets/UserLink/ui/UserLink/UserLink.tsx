import { useState } from "react"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu"
import style from "./UserLink.module.scss"
import guestIcon from "/images/guest_icon.svg"

export function UserLink() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={style.container}>
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
