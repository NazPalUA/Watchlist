import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { queryClient } from "../shared/api/query-client"
import {
  HistoryContextProvider,
  ModalContextProvider,
  SidebarContextProvider,
} from "../shared/context"

type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
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
