import style from "./Field.module.scss"

type FieldProps = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode
}

export function Field({ children, ...rest }: FieldProps) {
  return (
    <div className={style.field} {...rest}>
      {children}
    </div>
  )
}
