import { ReactNode } from "react"
import styles from "./AppLayout.module.scss"

interface AppLayoutProps {
  header: ReactNode
  sidebar: ReactNode
  page: ReactNode
  footer: ReactNode
  isSidebarOpen: boolean
}

export function AppLayout(props: AppLayoutProps) {
  const appClassName = `${styles.app} ${
    props.isSidebarOpen ? styles.extendedSidebar : styles.collapsedSidebar
  }`

  return (
    <div className={appClassName}>
      <header className={styles.header}>{props.header}</header>
      <main className={styles.main}>
        <aside className={styles.sidebar}>{props.sidebar}</aside>
        <section className={styles.page}>{props.page}</section>
      </main>
      <footer className={styles.footer}>{props.footer}</footer>
    </div>
  )
}
