import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { WatchlistsContextProvider } from './context/WatchlistsContext'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WatchlistsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WatchlistsContextProvider>
  </React.StrictMode>,
)