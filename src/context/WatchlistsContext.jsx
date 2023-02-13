import React, { useState } from "react"
import { nanoid } from "nanoid"

const WatchlistsContext = React.createContext()

function WatchlistsContextProvider({children}) {

    const [watchlistsArr, setWatchlistsArr] = useState([
        {
            id: "1",
            active: false,
            name: "My new watchlist",
            description: "Description of my new watchlist",
            movieIds: ["yhtyjht", "yukuyuy", "ytjtyjyt"]
        },
        {
            id: "2",
            active: false,
            name: "Some other watchlist",
            description: "Description of my new watchlist",
            movieIds: ["hrth", "tyjtyj", "yuk", "rth", "rtrt", "trt", "td"]
        },
        {
            id: "3",
            active: true,
            name: "Movies by Tom Cruise",
            description: "Description of my new watchlist",
            movieIds: ["hrth", "tyjtyj", "yuk", "rth", "rtrt", "trt", "td"]
        }
    ])

    function getActiveWatchlist() {
        return watchlistsArr.find(watchlist => watchlist.active)
    }

    function setActiveWatchlist(id) {
        setWatchlistsArr(prevWatchlistsArr => {
            return prevWatchlistsArr.map(watchlist => {
                return {...watchlist,
                    active: id===watchlist.id
                }
            })
        
        })
    }

    function createWatchlist(name, description, id) {
        setWatchlistsArr(prevWatchlistsArr => {
            return [
                ...prevWatchlistsArr,
                {
                    id: id,
                    active: false,
                    name: name,
                    description: description,
                    movieIds: []
                }
            ]
        })
    }

    function deleteWatchlist(watchlistId) {
        setWatchlistsArr(prevWatchlistsArr => {
            const arrWithoutDeleted = prevWatchlistsArr.filter(watchlist => {
                return watchlist.id !== watchlistId
            })
            if(arrWithoutDeleted.length) {
                const newActiveId = watchlistsArr[0].id === watchlistId ? watchlistsArr[1].id : watchlistsArr[0].id
                return arrWithoutDeleted.map(watchlist => {
                    return {...watchlist,
                        active: watchlist.id===newActiveId
                    }
                })
            } else return []
        })
    }

    function editWatchlist(name, description, watchlistId=getActiveWatchlist().id) {
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
                if(watchlistId !== watchlist.id) return watchlist
                else return {...watchlist, 
                    movieIds: watchlist.movieIds.push(movieId),
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
            getActiveWatchlist,
            setActiveWatchlist
        }}>
            {children}
        </WatchlistsContext.Provider>
    )
}

export {WatchlistsContextProvider, WatchlistsContext}