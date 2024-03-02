import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import React, { FC, ReactNode, createContext, useEffect, useState } from "react"
import { auth } from "../services/firebase/firebase-auth"
import { db } from "../services/firebase/firebase-config"

type User = {
  uid: string
  email: string | null
  name: string | null
}

const fetchUser = async (uid: string) => {
  const docRef = doc(db, "users", uid)
  const userDoc = await getDoc(docRef)
  if (userDoc.exists()) {
    return userDoc.data() as User
  }
  return null
}

export const useFetchUserQuery = (uid: string) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(uid),
  })
}

const setUser = async (uid: string, user: User) => {
  const docRef = doc(db, "users", uid)
  await setDoc(docRef, user)
}

export const useSetUserMutation = (uid: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (user: User) => setUser(uid, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [uid] })
    },
  })
}

type UserContextProps = {
  user: User | null
}

const UserContext = createContext<UserContextProps | undefined>(undefined)
type UserContextProviderProps = {
  children: ReactNode
}

export const UserProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const { data: userData, refetch } = useFetchUserQuery(user?.uid || "")
  const { mutate } = useSetUserMutation(user?.uid || "")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const newUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName,
        }
        setUser(newUser)
        refetch()
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [refetch])

  useEffect(() => {
    if (!userData && user) {
      mutate(user)
    }
  }, [userData, user, mutate])

  return (
    <UserContext.Provider value={{ user: user ?? null }}>
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
