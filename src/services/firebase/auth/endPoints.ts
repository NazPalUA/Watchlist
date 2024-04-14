import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as signOutFirebase,
  User,
  UserCredential,
} from "firebase/auth"
import { auth } from "../firebase-config"
import { SocialMediaProvider } from "./types"

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

// MUTATIONS:
export async function signInWithProvider(
  provider: SocialMediaProvider
): Promise<User> {
  try {
    let authProvider:
      | GoogleAuthProvider
      | FacebookAuthProvider
      | GithubAuthProvider

    switch (provider) {
      case "google":
        authProvider = new GoogleAuthProvider()
        break
      case "facebook":
        authProvider = new FacebookAuthProvider()
        break
      case "github":
        authProvider = new GithubAuthProvider()
        break
      default:
        throw new Error(`Unsupported provider: ${provider}`)
    }

    authProvider.setCustomParameters({
      prompt: "select_account",
    })
    const result = await signInWithPopup(auth, authProvider)
    return result.user
  } catch (error) {
    console.error(`Failed to sign in with provider: ${provider}`, error)
    throw error
  }
}

type AuthData = {
  email: string
  password: string
  type: "signUp" | "signIn"
}
export async function authWithEmailAndPassword({
  email,
  password,
  type,
}: AuthData): Promise<User> {
  let result: UserCredential
  try {
    if (type === "signUp") {
      result = await createUserWithEmailAndPassword(auth, email, password)
    } else {
      result = await signInWithEmailAndPassword(auth, email, password)
    }
    return result.user
  } catch (error) {
    console.error(`Failed to ${type} with email and password`, error)
    throw error
  }
}

export const signOut = async (): Promise<void> => {
  try {
    await signOutFirebase(auth)
  } catch (error) {
    console.error("Failed to sign out", error)
    throw error
  }
}