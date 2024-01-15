import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { WatchlistsContextProvider } from './context/WatchlistsContext'
import { ModalContextProvider } from './context/ModalContext'
import { HistoryContextProvider } from './context/HistoryContext'
import { SidebarContextProvider } from './context/SidebarContext'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <ModalContextProvider>
            <WatchlistsContextProvider>
                <HistoryContextProvider>
                    <SidebarContextProvider>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </SidebarContextProvider>
                </HistoryContextProvider>
            </WatchlistsContextProvider>
        </ModalContextProvider>
    </React.StrictMode>,
)