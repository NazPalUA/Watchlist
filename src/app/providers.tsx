import type { Router } from "@remix-run/router/dist/router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterProvider } from "react-router-dom"
import { HistoryContextProvider } from "../shared/context/HistoryContext"
import { ModalContextProvider } from "../shared/context/ModalContext"
import { SidebarContextProvider } from "../shared/context/SidebarContext"

type Props = {
  router: Router
  client: QueryClient
}

export const Providers = ({ router, client }: Props) => {
  return (
    <QueryClientProvider client={client}>
      <ModalContextProvider>
        <HistoryContextProvider>
          <SidebarContextProvider>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={true} />
          </SidebarContextProvider>
        </HistoryContextProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  )
}
