import { getDocData, userDocRef } from "../../../../shared/API_ref/firestore"
import { User } from "../../model/types"

export const getUserData = async (userId: string) => {
  return getDocData(userDocRef(userId)) as Promise<User>
}
