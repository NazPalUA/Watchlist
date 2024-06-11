import { serverTimestamp, setDoc, updateDoc } from "firebase/firestore"
import { userDocRef } from "../../../../shared/api/firestore"
import { AddUserData, EditUserData } from "../../model/types"

export const addUserData = async (userId: string, data: AddUserData) => {
  try {
    await setDoc(
      userDocRef(userId),
      {
        ...data,
        createdAt: serverTimestamp(),
        lastModifiedAt: serverTimestamp(),
      },
      { merge: true }
    )
  } catch (error) {
    console.error("Error adding user data: ", error)
    throw error
  }
}

export const editUserData = async (userId: string, data: EditUserData) => {
  const updatedData: { [key: string]: any } = {}

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined) {
      updatedData[key] = value
    }
  })

  try {
    await updateDoc(userDocRef(userId), {
      ...updatedData,
      lastModifiedAt: serverTimestamp(),
    })
  } catch (error) {
    console.error("Error editing user data: ", error)
    throw error
  }
}
