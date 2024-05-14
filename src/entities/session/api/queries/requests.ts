import { User, onAuthStateChanged } from "firebase/auth"
import { auth } from "../../../../shared/API/firebase-config"

// QUERIES:
export const getCurrentUser = (): Promise<User | null> =>
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
