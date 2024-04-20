import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { HistoryContextProvider } from "./context/HistoryContext"
import { ModalContextProvider } from "./context/ModalContext"
import { SidebarContextProvider } from "./context/SidebarContext"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <HistoryContextProvider>
          <SidebarContextProvider>
            <BrowserRouter>
              <App />
              <ReactQueryDevtools initialIsOpen={true} />
            </BrowserRouter>
          </SidebarContextProvider>
        </HistoryContextProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
