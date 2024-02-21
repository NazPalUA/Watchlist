import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { AuthProvider } from "./context/AuthContext"
import { HistoryContextProvider } from "./context/HistoryContext"
import { ModalContextProvider } from "./context/ModalContext"
import { SidebarContextProvider } from "./context/SidebarContext"
import { WatchlistsContextProvider } from "./context/WatchlistsContext"
import "./index.scss"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModalContextProvider>
          <WatchlistsContextProvider>
            <HistoryContextProvider>
              <SidebarContextProvider>
                <BrowserRouter>
                  <App />
                  <ReactQueryDevtools initialIsOpen={true} />
                </BrowserRouter>
              </SidebarContextProvider>
            </HistoryContextProvider>
          </WatchlistsContextProvider>
        </ModalContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
