import { useState, FC, createContext, useCallback, useContext } from "react"

export type SidebarContextType = {
    isSidebarOpen: boolean,
    openSidebar: () => void,
    closeSidebar: () => void,
    toggleSidebar: () => void,
    getSidebarStateClass: () => string, // Function to get CSS class
}

const defaultContextValue: SidebarContextType = {
    isSidebarOpen: false,
    openSidebar: () => {},
    closeSidebar: () => {},
    toggleSidebar: () => {},
    getSidebarStateClass: () => '' // Default implementation
}

const SidebarContext = createContext<SidebarContextType>(defaultContextValue)

type SidebarContextProviderProps = {
    children: React.ReactNode
}

const SidebarContextProvider: FC<SidebarContextProviderProps> = ({children}) => {
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

    const getSidebarStateClass = useCallback(() => {
        return isSidebarOpen ? 'sidebar-open' : 'sidebar-closed';
    }, [isSidebarOpen]);

    return (
        <SidebarContext.Provider value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            toggleSidebar,
            getSidebarStateClass
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebarContext must be used within a SidebarContextProvider");
    }
    return context;
}

export { SidebarContextProvider }
