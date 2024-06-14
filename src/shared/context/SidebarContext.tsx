"use client"

import { FC, createContext, useCallback, useContext, useState } from "react"

export type SidebarContextType = {
  isSidebarOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
}

const defaultContextValue: SidebarContextType = {
  isSidebarOpen: true,
  openSidebar: () => {},
  closeSidebar: () => {},
  toggleSidebar: () => {},
}

const SidebarContext = createContext<SidebarContextType>(defaultContextValue)

type SidebarContextProviderProps = {
  children: React.ReactNode
}

const SidebarContextProvider: FC<SidebarContextProviderProps> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = useCallback(() => {
    setIsSidebarOpen(true)
  }, [])

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prevState => !prevState)
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error(
      "useSidebarContext must be used within a SidebarContextProvider"
    )
  }
  return context
}

export { SidebarContextProvider }
