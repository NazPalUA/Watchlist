import React from "react"
import ReactDOM from "react-dom/client"
import { queryClient } from "../shared/API/query-client"
import "./global.scss"
import { Providers } from "./providers"
import { router } from "./router"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers router={router} client={queryClient} />
  </React.StrictMode>
)
