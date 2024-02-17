import React from "react"
import useLocalStorage from "../hooks/useLocalStorage"

interface User {
  name?: string | null
  userID?: string
  profilePhoto?: string | null
  isAuth?: boolean
  // email: string
  // password: string
  // watchlists: string[]
  // history: string[]
}

interface AuthContextType {
  user: User | null
  signin: (user: User | null, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

let AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { storedValue: user, setStoredValue: setUser } =
    useLocalStorage<User | null>("authInfo", null)

  let signin = (newUser: User | null, callback: VoidFunction) => {
    if (!newUser) return
    setUser(newUser)
    callback()
  }

  let signout = (callback: VoidFunction) => {
    setUser(null)
    callback()
  }

  let value = { user, signin, signout, setUser }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return React.useContext(AuthContext)
}
