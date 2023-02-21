import React, { useState } from "react"
import { nanoid } from "nanoid"

const WatchlistsContext = React.createContext()

function WatchlistsContextProvider({children}) {

    const [watchlistsArr, setWatchlistsArr] = useState([
        {
            id: "1",
            name: "Marvel",
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
        setWatchlistsArr(prevWatchlistsArr => {
            return prevWatchlistsArr.map(watchlist => {
                // console.log(watchlist.movieIds)
                if(watchlistId !== watchlist.id) return watchlist
                else return {...watchlist, 
                    movieIds: [...watchlist.movieIds, movieId],
                }
            })
        })
    }

    function deleteMovieFromWatchlist(movieId, watchlistId) {
        setWatchlistsArr(prevWatchlistsArr => {
            return prevWatchlistsArr.map(watchlist => {
                if(watchlistId !== watchlist.id) return watchlist
                else return watchlist.movieIds.filter(id => {
                    return id !== movieId
                })
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