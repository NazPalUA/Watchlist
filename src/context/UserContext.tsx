// UserContext.tsx
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import React, { FC, ReactNode, createContext, useEffect, useState } from "react"
import { auth } from "../services/firebase/firebase-auth"
import { db } from "../services/firebase/firebase-config"

interface User {
  uid: string
  email: string | null
  name: string | null
  watchlistTitles: string[]
  watchlists: {
    title: string
    description: string
    watchlistId: string
    createdAt: Date
    movieIds: string[]
  }[]
}

interface UserContextProps {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const UserContext = createContext<UserContextProps | undefined>(undefined)
type UserContextProviderProps = {
  children: ReactNode
}

export const UserProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid)
        const userDoc = await getDoc(docRef)
        if (userDoc.exists()) {
          const userData = userDoc.data() as User
          if (!userData.email) {
            userData.email = user.email
          }
          if (!userData.name) {
            userData.name = user.displayName
          }
          setUser(userData)
        } else {
          setDoc(docRef, {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          })
        }
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
