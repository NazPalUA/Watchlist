// AuthContext.tsx
import firebase from "firebase/auth"
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { auth } from "../services/firebase/firebase-auth"

interface AuthContextProps {
  currentUser: firebase.User | null
  loading: boolean
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider")
  }
  return context
}
