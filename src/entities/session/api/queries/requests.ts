import { User, onAuthStateChanged } from "firebase/auth"
import { auth } from "../../../../shared/API_ref/firebase-config"

// QUERIES:
export const fetchSessionUser = (): Promise<User | null> =>
  new Promise((resolve, reject) => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        resolve(user)
        unsubscribe()
      })
    } catch (error) {
      console.error("Failed to get current user", error)
      reject(error)
    }
  })
