import React, { useState, useEffect } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const WatchlistsContext = React.createContext()

function WatchlistsContextProvider({children}) {

    const [watchlistsArrLocalStorage, setWatchlistsArrLocalStorage] = useLocalStorage("watchlistsArr", [
        {
            id: "1",
            name: "Watchlist name",
            description: "Description of my new watchlist",
            movieIds: [505642, 436270, 774752]
        },
        {
            id: "2",
            name: "Some other watchlist",
            description: "Description of my new watchlist",
            movieIds: [632856, 668461, 928344, 505642, 436270, 774752]
        }
    ])
    const [watchlistsArr, setWatchlistsArr] = useState(watchlistsArrLocalStorage)

    useEffect(() => {
        setWatchlistsArrLocalStorage(watchlistsArr)
    },[watchlistsArr])

    function getWatchlistData(watchlistId) {
        return watchlistsArr.find(watchlist => watchlist.id === watchlistId)
    }

    function getMovieIds(watchlistId) {
        return watchlistsArr.find(watchlist => watchlist.id === watchlistId).movieIds
    }

    function createWatchlist(name, description, id) {
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

    function deleteWatchlist(watchlistId) {
        setWatchlistsArr(prevWatchlistsArr => {
            return prevWatchlistsArr.filter(watchlist => {
                return watchlist.id !== watchlistId
            })
        })
    }

    function editWatchlist(name, description, watchlistId) {
        setWatchlistsArr(prevWatchlistsArr => {
            return prevWatchlistsArr.map(watchlist => {
                if(watchlistId !== watchlist.id) return watchlist
                else return {...watchlist, 
                    name: name,
                    description: description
                }
            })
        })
    }

    function addMovieToWatchlist(movieId, watchlistId) {
        setWatchlistsArr(prevWatchlistsArr => prevWatchlistsArr.map(watchlist => {
                if (watchlistId !== watchlist.id) return watchlist
                else {
                    if (watchlist.movieIds.includes(String(movieId)) || 
                        watchlist.movieIds.includes(Number(movieId))) return watchlist
                    
                    return {...watchlist, 
                        movieIds: [...watchlist.movieIds, movieId],
                    }
                }
                
            })
        )
    }

    function deleteMovieFromWatchlist(movieId, watchlistId) {
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
            createWatchlist,
            deleteWatchlist,
            editWatchlist,
            addMovieToWatchlist,
            deleteMovieFromWatchlist,
            getMovieIds,
            getWatchlistData
        }}>
            {children}
        </WatchlistsContext.Provider>
    )
}

export {WatchlistsContextProvider, WatchlistsContext}