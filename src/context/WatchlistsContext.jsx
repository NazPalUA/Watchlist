import React, { useState } from "react"
import { nanoid } from "nanoid"

const WatchlistsContext = React.createContext()

function WatchlistsContextProvider({children}) {

    const [watchlistsArr, setWatchlistsArr] = useState([
        {
            id: "1",
            name: "My new watchlist",
            description: "Description of my new watchlist",
            movieIds: ["yhtyjht", "yukuyuy", "ytjtyjyt"]
        },
        {
            id: "2",
            name: "My new watchlist",
            description: "Description of my new watchlist",
            movieIds: ["hrth", "tyjtyj", "yuk", "rth", "rtrt", "trt", "td"]
        }
    ])


    function createWatchlist(name, description) {
        setWatchlistsArr(prevWatchlistsArr => {
            return [
                ...prevWatchlistsArr,
                {
                    id: nanoid(),
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
            addMovieToWatchlist,
            deleteMovieFromWatchlist,
        }}>
            {children}
        </WatchlistsContext.Provider>
    )
}

export {WatchlistsContextProvider, WatchlistsContext}