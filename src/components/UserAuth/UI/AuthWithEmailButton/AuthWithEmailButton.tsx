import style from "./AuthWithEmailButton.module.scss"

type AuthWithEmailButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode
}

export default function AuthWithEmailButton({
  children,
  ...rest
}: AuthWithEmailButtonProps) {
  return (
    <button className={style.btn} {...rest}>
      {children}
    </button>
  )
}
