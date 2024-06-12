import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
  HistoryContextProvider,
  ModalContextProvider,
  SidebarContextProvider,
} from "../shared/context"

type Props = {
  children: React.ReactNode
  client: QueryClient
}

export const Providers = ({ children, client }: Props) => {
  return (
    <QueryClientProvider client={client}>
      <ModalContextProvider>
        <HistoryContextProvider>
          <SidebarContextProvider>
            {children}
            <ReactQueryDevtools initialIsOpen={true} />
          </SidebarContextProvider>
        </HistoryContextProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  )
}
