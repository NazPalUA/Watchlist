import React from "react"
import style from "./TextArea.module.scss"

type TextAreaProps = React.ComponentPropsWithoutRef<"textarea">

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ children, ...rest }, ref) => {
    return <textarea ref={ref} className={style.textarea} {...rest} />
  }
)
