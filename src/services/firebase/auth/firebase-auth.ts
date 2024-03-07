import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { app } from "../firebase-config"
import { SocialMediaProvider } from "./types"

type SignUpData = {
  name: string
  email: string
  password: string
}

export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()
export const facebookAuthProvider = new FacebookAuthProvider()
export const githubAuthProvider = new GithubAuthProvider()

export async function signInWithEmail(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password)
}

export async function signUpWithEmail({ email, password }: SignUpData) {
  return await createUserWithEmailAndPassword(auth, email, password)
}

export async function signOut() {
  return await auth.signOut()
}

export function signInWithProvider(provider: SocialMediaProvider) {
  switch (provider) {
    case "google":
      return signInWithPopup(auth, googleAuthProvider)
    case "facebook":
      return signInWithPopup(auth, facebookAuthProvider)
    case "github":
      return signInWithPopup(auth, githubAuthProvider)
  }
}
