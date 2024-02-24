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
  photoUrl: string | null
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
          // check if user has email, name, photoUrl. If not, update user data
          if (!userData.email) {
            userData.email = user.email
          }
          if (!userData.name) {
            userData.name = user.displayName
          }
          if (!userData.photoUrl) {
            userData.photoUrl = user.photoURL
          }
          setUser(userData)
        } else {
          setDoc(docRef, {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            photoUrl: user.photoURL,
          })
        }
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export const useUser = () => {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
