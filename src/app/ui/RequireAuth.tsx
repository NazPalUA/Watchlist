import { Navigate, useLocation } from "react-router-dom"
import { useSessionQuery } from "../../entities/session"

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation()
  const { data: user } = useSessionQuery()

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
