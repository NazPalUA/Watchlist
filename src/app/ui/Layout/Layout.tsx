import { ReactNode } from "react"
import Container from "../Container/Container"
import styles from "./Layout.module.scss"

interface LayoutProps {
  header: ReactNode
  sidebar: ReactNode
  page: ReactNode
  footer: ReactNode
  isSidebarOpen: boolean
}

export function Layout(props: LayoutProps) {
  const appClassName = `${styles.app} ${
    props.isSidebarOpen ? styles.extendedSidebar : styles.collapsedSidebar
  }`

  return (
    <div className={appClassName}>
      <header className={styles.header}>
        <Container>{props.header}</Container>
      </header>
      <main className={styles.main}>
        <Container className={styles.container_main}>
          <aside className={styles.sidebar}>{props.sidebar}</aside>
          <section className={styles.page}>{props.page}</section>
        </Container>
      </main>
      <footer className={styles.footer}>
        <Container>{props.footer}</Container>
      </footer>
    </div>
  )
}
