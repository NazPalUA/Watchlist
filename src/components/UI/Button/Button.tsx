import classNames from "classnames"
import style from "./Button.module.scss"

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode
  size?: "m" | "l"
  width?: "full" | "auto"
  className?: string
}

export function Button({
  children,
  size = "m",
  className,
  width = "auto",
  ...rest
}: ButtonProps) {
  const fullClassName = classNames(
    style.btn,
    style[`btn--size-${size}`],
    style[`btn--width-${width}`],
    className
  )
  return (
    <button className={fullClassName} {...rest}>
      {children}
    </button>
  )
}
