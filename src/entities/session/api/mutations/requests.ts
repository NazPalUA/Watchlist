import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as signOutFirebase,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth"
import { auth } from "../../../../shared/api/firebase-config"
import { SocialMediaProvider } from "../../model/types"

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
    switch (type) {
      case "signUp":
        result = await createUserWithEmailAndPassword(auth, email, password)
        break
      case "signIn":
        result = await signInWithEmailAndPassword(auth, email, password)
        break
      default:
        throw new Error(`Unknown authentication type: ${type}`)
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

export const updateDisplayName = async (displayName: string): Promise<void> => {
  const user = auth.currentUser
  try {
    if (user) {
      await updateProfile(user, { displayName })
    } else {
      throw new Error("No user found")
    }
  } catch (error) {
    console.error("Failed to update display name", error)
    throw error
  }
}
