import { FieldValue } from "firebase/firestore"

export type User = {
  name: string
  email: string
  photoURL: string
  createdAt: FieldValue
  lastModifiedAt: FieldValue
}

export type AddUserData = Omit<User, "createdAt" | "lastModifiedAt">

export type EditUserData = Partial<AddUserData>
