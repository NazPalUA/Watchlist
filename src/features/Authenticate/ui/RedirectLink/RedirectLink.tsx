import Link from "next/link"
import { UserAuthProps } from "../UserAuth"
import style from "./RedirectLink.module.scss"

type RedirectLinkProps = UserAuthProps

export default function RedirectLink({ type }: RedirectLinkProps) {
  const linkText = type === "login" ? "Sign up" : "Log in"
  const message =
    type === "login" ? "Don't have an account?" : "Already have an account?"
  const to = type === "login" ? "/signup" : "/login"

  return (
    <p className={style.linkWrapper}>
      <span>{message}</span>
      <Link className={style.link} to={to}>
        {linkText}
      </Link>
    </p>
  )
}
