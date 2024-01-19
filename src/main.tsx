import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query'
import { WatchlistsContextProvider } from './context/WatchlistsContext'
import { ModalContextProvider } from './context/ModalContext'
import { HistoryContextProvider } from './context/HistoryContext'
import { SidebarContextProvider } from './context/SidebarContext'
import App from './App'
import './index.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <ModalContextProvider>
            <WatchlistsContextProvider>
                <HistoryContextProvider>
                    <SidebarContextProvider>
                        <BrowserRouter>
                            <QueryClientProvider client={queryClient}>
                                <App />
                            </QueryClientProvider>
                        </BrowserRouter>
                    </SidebarContextProvider>
                </HistoryContextProvider>
            </WatchlistsContextProvider>
        </ModalContextProvider>
    </React.StrictMode>,
)