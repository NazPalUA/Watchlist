import React, { useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

const HistoryContext = React.createContext()

function HistoryContextProvider({children}) {

    const {storedValue, setStoredValue} = useLocalStorage('historyIds', []);

    const [historyIds, setHistoryIds] = useState(storedValue)

    useEffect(() => {
        setStoredValue(historyIds)
    },[historyIds])

    function addToHistory(id) {
        const movieId = id.toString()
        setHistoryIds(prevIds => {
            // Check if the given movieId is already in the array
            if (prevIds.includes(movieId)) {
                // If it is, remove it from the array
                const index = prevIds.indexOf(movieId);
                prevIds.splice(index, 1);
            }

            // Add the given movieId to the beginning of the array
            prevIds.unshift(movieId);

            // Return the updated array with unique elements and the latest added element at the beginning
            return [...new Set(prevIds)];
        })
    }

    function clearHistory() {
        setHistoryIds([])
    }

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

export {HistoryContextProvider, HistoryContext}