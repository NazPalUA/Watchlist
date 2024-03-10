import style from "./SubmitButton.module.scss"

type SubmitButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode
}

export function SubmitButton({ children, ...rest }: SubmitButtonProps) {
  return (
    <button className={style.btn} {...rest}>
      {children}
    </button>
  )
}
