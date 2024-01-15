import { useEffect, useState, createContext, FC, ReactNode, useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

type HistoryContextType = {
    historyIds: string [],
    addToHistory: (id: string | undefined) => void,
    clearHistory: () => void
}

const HistoryContext = createContext<HistoryContextType | null>(null)

type HistoryContextProviderProps = {
    children: ReactNode
}

const HistoryContextProvider: FC<HistoryContextProviderProps> = ({ children } ) => {
    // Use the useLocalStorage hook to get the stored history IDs from local storage
    const { storedValue, setStoredValue } = useLocalStorage<string[]>('historyIds', [])

    // Use useState to initialize the state of history IDs with the stored value
    const [historyIds, setHistoryIds] = useState<string[]>(storedValue)

    // Use useEffect to update the history IDs at local storage whenever historyIds changes
    useEffect(() => setStoredValue(historyIds), [historyIds])

    // Define a function that adds a movie ID to the history
    function addToHistory(id: string | undefined) {
        // Convert the ID to a string
        const movieId = id ? id.toString() : ""

        setHistoryIds(prevIds => {
            // Check if the given movieId is already in the array
            if (prevIds.includes(movieId)) {
                // If it is, remove it from the array
                const index = prevIds.indexOf(movieId)
                prevIds.splice(index, 1)
            }
            // Add the given movieId to the beginning of the array
            prevIds.unshift(movieId)

            // Return the updated array with unique elements and the latest added element at the beginning
            return [...new Set(prevIds)]
        })
    }

    // Define a function that clears the history
    function clearHistory() { setHistoryIds([]) }

    return (
        <HistoryContext.Provider value={{
            historyIds,
            addToHistory,
            clearHistory
        }}>
            {children}
        </HistoryContext.Provider>
    )
}

export const useHistoryContext = () => {
    const context = useContext(HistoryContext);
    if (!context) {
        throw new Error("useHistoryContext must be used within a HistoryContextProvider");
    }
    return context;
}

export { HistoryContextProvider }