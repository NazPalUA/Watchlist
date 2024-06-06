import { useSessionQuery } from "../../../entities/session"
import { useGetUserDataQuery } from "../../../entities/user"
import Loader from "../../../shared/ui/Loader"
import { NavLinkWithActiveClass } from "../../../shared/ui/NavLinkWithActiveClass"
import style from "./UserLink.module.scss"
import guestIcon from "/images/guest_icon.svg"

export function UserLink() {
  const { isLoading: awaitingAuth, data: currentUser } = useSessionQuery()
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
    </NavLinkWithActiveClass>
  )
}
