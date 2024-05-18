import { Outlet } from "react-router-dom"
import MobileHeader from "../../components/MobileHeader/MobileHeader"
import Sidebar from "../../components/Sidebar/Sidebar"
import { useSidebarContext } from "../../entities/sidebar/SidebarContext"
import "./Layout.scss"

export default function Layout() {
  const { getSidebarStateClass } = useSidebarContext()

  return (
    <div className={`app app--${getSidebarStateClass()}`}>
      <header className="app__header">
        <div className="app__container">
          <MobileHeader />
        </div>
      </header>
      <main className="app__main">
        <div className="app__container app__main-wrapper" id="container">
          <section
            className="app__main-section app__main-section_sidebar"
            id="sidebar"
          >
            <Sidebar className="app__sidebar" />
          </section>
          <section className="app__main-section app__main-section_page">
            <Outlet />
          </section>
        </div>
      </main>
    </div>
  )
}
