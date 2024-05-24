import styles from "./Container.module.scss"

type ContainerProps = { className?: string; children: React.ReactNode }

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={`${styles.container} ${className}`.trim()}>{children}</div>
  )
}
