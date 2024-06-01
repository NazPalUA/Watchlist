import { getDocData } from "../../../../shared/api/firestore/getDocData"
import { userDocRef } from "../../../../shared/api/firestore/storeReferences"
import { User } from "../../model/types"

export const getUserData = async (userId: string) => {
  return getDocData(userDocRef(userId)) as Promise<User>
}
