import style from "./Form.module.scss"

type FormProps = React.ComponentPropsWithoutRef<"form"> & {
  children: React.ReactNode
}

export function Form({ children, ...rest }: FormProps) {
  return (
    <form className={style.form} {...rest}>
      {children}
    </form>
  )
}
