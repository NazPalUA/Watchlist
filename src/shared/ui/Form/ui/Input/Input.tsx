import React from "react"
import style from "./Input.module.scss"

type InputProps = React.ComponentPropsWithoutRef<"input">

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => {
    return <input ref={ref} className={style.input} {...rest} />
  }
)
