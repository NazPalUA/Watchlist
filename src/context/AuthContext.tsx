import React from "react"
import { fakeAuthProvider } from "../utils/auth"

interface User {
  name: string
  // email: string
  // password: string
  // avatar: string
  // id: string
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
  let [user, setUser] = React.useState<User | null>(null)

  let signin = (newUser: User | null, callback: VoidFunction) => {
    if (!newUser) return
    return fakeAuthProvider.signin(() => {
      setUser(newUser)
      callback()
    })
  }

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null)
      callback()
    })
  }

  let value = { user, signin, signout, setUser }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return React.useContext(AuthContext)
}
