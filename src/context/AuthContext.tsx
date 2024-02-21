import { signOut } from "firebase/auth"
import React from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import {
  auth,
  useLoginEmailPassword,
  useSignInWithGoogle,
} from "../services/firebase/firebase-auth"

type emailPasswordSignInType = { email: string; password: string }

type User = any
// {
// name?: string | null
// userID?: string
// profilePhoto?: string | null
// isAuth?: boolean
// email?: string
// password?: string
// watchlists: string[]
// history: string[]
// }

interface AuthContextType {
  user: User | null
  googleSignIn: (callback: VoidFunction) => void
  emailPasswordSignIn: (
    emailAndPassword: emailPasswordSignInType,
    callback: VoidFunction
  ) => void
  signOutAll: (callback: VoidFunction) => void
}

let AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { storedValue: user, setStoredValue: setUser } =
    useLocalStorage<User | null>("authInfo", null)

  const { mutate } = useLoginEmailPassword()
  function emailPasswordSignIn(
    emailAndPassword: emailPasswordSignInType,
    callback: VoidFunction
  ) {
    mutate(emailAndPassword, {
      onSuccess: (userCredential) => {
        setUser(userCredential.user)
        callback()
        console.log(userCredential)
      },
      onError: (error) => {
        console.error("Error signing in: ", error)
      },
    })
  }

  const { mutate: googleMutate } = useSignInWithGoogle()
  function googleSignIn(callback: VoidFunction) {
    googleMutate(undefined, {
      onSuccess: (userCredential) => {
        setUser(userCredential.user)
        callback()
        console.log("here")
        console.log(userCredential)
      },
      onError: (error) => {
        console.error("Error signing in: ", error)
      },
    })
  }

  async function signOutAll(callback: VoidFunction) {
    try {
      await signOut(auth)
      setUser(null)
      callback()
    } catch (error) {
      console.error("Error signing out: ", error)
    }
  }

  let value = { user, signOutAll, googleSignIn, emailPasswordSignIn }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return React.useContext(AuthContext)
}
