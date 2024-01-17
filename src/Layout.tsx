import { Outlet } from "react-router-dom"
import { useModalContext } from "./context/ModalContext"
import Sidebar from './components/Sidebar/Sidebar'
import MobileHeader from './components/MobileHeader/MobileHeader'
import Modal from './components/Modal'
import AddToWatchlist from './components/AddToWatchlist'
import { useSidebarContext } from "./context/SidebarContext"
import './App.scss'


export default function Layout() {
    // Get the ModalContext values
	const {isModalActive, setIsModalActive} = useModalContext()

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
                    <section className="app__main-section app__main-section_sidebar" id="sidebar">
                        <Sidebar className="app__sidebar" />
                    </section>
                    <section className="app__main-section app__main-section_page">
                        <Outlet />
                    </section>
                </div>
            </main>
            <Modal active={isModalActive} setActive={setIsModalActive}>
                <AddToWatchlist />
            </Modal>
        </div>
    )
}