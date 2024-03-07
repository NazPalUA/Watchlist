// AuthContext.tsx
import { useQueryClient } from "@tanstack/react-query"
import firebase from "firebase/auth"
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { auth } from "../services/firebase/auth/firebase-auth"

interface AuthContextProps {
  currentUser: firebase.User | null
  loading: boolean
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const { storedValue, setStoredValue } = useLocalStorage<firebase.User | null>(
    "user",
    null
  )
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(
    storedValue
  )
  const [loading, setLoading] = useState(true)

  const queryClient = useQueryClient()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
        setStoredValue(user)
        console.log("Logged in as: ", user.email)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  async function logout() {
    try {
      auth.signOut()
    } catch (error) {
      console.error("Error signing out", error)
    } finally {
      setCurrentUser(null)
      setStoredValue(null)
      queryClient.clear()
      console.log("Logged out")
    }
  }

  return (
    <AuthContext.Provider value={{ currentUser, loading, logout }}>
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
