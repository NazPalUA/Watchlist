import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { app } from "./firebase-config"

type SignUpData = {
  name: string
  email: string
  password: string
}

export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()
export const facebookAuthProvider = new FacebookAuthProvider()

export async function signInWithEmail(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password)
}

export async function signInWithGoogle() {
  return await signInWithPopup(auth, googleAuthProvider)
}

export async function signInWithFacebook() {
  return await signInWithPopup(auth, facebookAuthProvider)
}

export async function signUpWithEmail({ email, password }: SignUpData) {
  return await createUserWithEmailAndPassword(auth, email, password)
}

export async function signOut() {
  return await auth.signOut()
}
