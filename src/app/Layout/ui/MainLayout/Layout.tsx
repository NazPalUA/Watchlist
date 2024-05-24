import React, { ReactNode } from "react"
import styles from "./Layout.module.scss"

interface LayoutProps {
  header: ReactNode
  sidebar: ReactNode
  mainContent: ReactNode
  isSidebarOpen: boolean
}

const Layout: React.FC<LayoutProps> = ({
  header,
  sidebar,
  mainContent,
  isSidebarOpen,
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>{header}</header>
      <main
        className={`${styles.main} ${
          isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <aside className={styles.sidebar}>{sidebar}</aside>
        <section className={styles.content}>{mainContent}</section>
      </main>
    </div>
  )
}

export default Layout
