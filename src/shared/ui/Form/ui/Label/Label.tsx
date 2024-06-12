import React from "react"
import style from "./Label.module.scss"

type LabelProps = React.ComponentPropsWithoutRef<"label"> & {
  children: React.ReactNode
}

export function Label({ children, ...rest }: LabelProps) {
  return (
    <label className={style.label} {...rest}>
      {children}
    </label>
  )
}
