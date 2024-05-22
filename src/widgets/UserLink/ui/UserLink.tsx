import { FiMoreHorizontal } from "react-icons/fi"
import { useGetUserQuery } from "../../../entities/session/api/queries/hooks"
import { useGetUserDataQuery } from "../../../entities/user/api/queries/hooks"
import Loader from "../../../shared/UI/Loader"
import { NavLinkWithActiveClass } from "../../../shared/UI/NavLinkWithActiveClass"
import style from "./UserLink.module.scss"
import guestIcon from "/images/guest_icon.svg"

export function UserLink() {
  const { isLoading: awaitingAuth, data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid
  const { data: userData, isLoading: userDataLoading } =
    useGetUserDataQuery(userId)

  if (awaitingAuth || userDataLoading) return <Loader />

  return (
    <NavLinkWithActiveClass
      className={style.container}
      to={!currentUser ? "/login" : "/user"}
    >
      <img className={style.img} src={guestIcon} alt="guest icon" />
      <p className={style.text}>{userData?.name || "Guest"}</p>
      <FiMoreHorizontal className={style.btnIcon} color="#e1e1e1" size={32} />
    </NavLinkWithActiveClass>
  )
}
