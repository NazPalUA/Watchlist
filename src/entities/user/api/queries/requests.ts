import { getDocData } from "../../../../shared/API/firestore/getDocData"
import { userDocRef } from "../../../../shared/API/firestore/storeReferences"
import { User } from "../../model/types"

export const getUserData = async (userId: string) => {
  return getDocData(userDocRef(userId)) as Promise<User>
}
