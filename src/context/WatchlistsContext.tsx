import { useState, useEffect, createContext, ReactNode, FC } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

type WatchlistType = {
    id: string,
    name: string,
    description: string,
    movieIds: string[]
}

export type WatchlistsContextType = {
    watchlistsArr: WatchlistType[],
    getWatchlistData: (watchlistId: string | undefined) => WatchlistType | undefined,
    getMovieIds: (watchlistId: string | undefined) => string[] | undefined,
    createWatchlist: (name: string, description: string, id: string) => void,
    editWatchlist: (name: string, description: string | undefined, movieIds: string[], watchlistId: string) => void,
    deleteWatchlist: (watchlistId: string | undefined) => void,
    addMovieToWatchlist: (movieId: string, watchlistId: string) => void,
    deleteMovieFromWatchlist: (movieId: string, watchlistId: string) => void
}

const WatchlistsContext = createContext<WatchlistsContextType | null>(null)

type WatchlistsContextProviderProps = {
    children: ReactNode
}

const WatchlistsContextProvider: FC<WatchlistsContextProviderProps> = ({children}) => {
    // Initialize state for the watchlists array using local storage, or default values if none exist
    const {storedValue, setStoredValue} = useLocalStorage("watchlistsArr", [
        {
            id: "1",
            name: "Watchlist name",
            description: "Description of my new watchlist",
            movieIds: ["505642", "436270", "774752"]
        },
        {
            id: "2",
            name: "Some other watchlist",
            description: "Description of my new watchlist",
            movieIds: ["632856", "668461", "928344", "505642", "436270", "774752"]
        }
    ])
    // Set the watchlists array state using the local storage value or the default value
    const [watchlistsArr, setWatchlistsArr] = useState<WatchlistType[]>(storedValue)

    // Update the local storage value whenever the watchlists array state changes
    useEffect(() => {setStoredValue(watchlistsArr)},[watchlistsArr])

    // Find a watchlist in the array by ID
    function getWatchlistData(watchlistId: string | undefined) {
        if (!watchlistId) return
        return watchlistsArr.find(watchlist => watchlist.id === watchlistId)
    }

    // Get an array of movie IDs for a specific watchlist
    function getMovieIds(watchlistId: string | undefined) {
        if(!watchlistId) return []
        return watchlistsArr.find(watchlist => watchlist.id === watchlistId)?.movieIds
    }

    // Create a new watchlist object and add it to the array
    function createWatchlist(name: string, description: string, id: string) {
        setWatchlistsArr(prevWatchlistsArr => {
            return [
                ...prevWatchlistsArr,
                {
                    id: id,
                    name: name,
                    description: description,
                    movieIds: []
                }
            ]
        })
    }

    // Edit an existing watchlist in the array
    function editWatchlist(name: string, description: string | undefined, movieIds: string[], watchlistId: string) {
        setWatchlistsArr(prevWatchlistsArr => {
            return prevWatchlistsArr.map(watchlist => {
                if(watchlistId !== watchlist.id) return watchlist
                else return {...watchlist, 
                    name: name,
                    description: description || "",
                    movieIds: movieIds
                }
            })
        })
    }
    
    // Delete a watchlist from the array by ID
    function deleteWatchlist(watchlistId: string | undefined) {
        if(!watchlistId) return undefined
        setWatchlistsArr(prevWatchlistsArr => {
            return prevWatchlistsArr.filter(watchlist => {
                return watchlist.id !== watchlistId
            })
        })
    }


    // Add a movie ID to a specific watchlist's movieIds array
    function addMovieToWatchlist(movieId: string, watchlistId: string) {
        setWatchlistsArr(prevWatchlistsArr => prevWatchlistsArr.map(watchlist => {
                if (watchlistId !== watchlist.id) return watchlist
                else {
                    if (watchlist.movieIds.includes(String(movieId))) return watchlist
                    
                    return {...watchlist, 
                        movieIds: [...watchlist.movieIds, movieId],
                    }
                }
                
            })
        )
    }

    // Remove a movie ID from a specific watchlist's
    function deleteMovieFromWatchlist(movieId: string, watchlistId: string) {
        setWatchlistsArr(prevWatchlistsArr => {
            return prevWatchlistsArr.map(watchlist => {
                if(watchlistId !== watchlist.id) return watchlist
                else return {
                    ...watchlist,
                    movieIds: watchlist.movieIds.filter(id => {
                        return id !== movieId
                    })
                }
            })
        })
    }

    return (
        <WatchlistsContext.Provider value={{
            watchlistsArr,
            getWatchlistData,
            getMovieIds,
            createWatchlist,
            editWatchlist,
            deleteWatchlist,
            addMovieToWatchlist,
            deleteMovieFromWatchlist,
        }}>
            {children}
        </WatchlistsContext.Provider>
    )
}

export {WatchlistsContextProvider, WatchlistsContext}