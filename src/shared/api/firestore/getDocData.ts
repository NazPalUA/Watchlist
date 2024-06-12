import { DocumentData, DocumentReference, getDoc } from "firebase/firestore"

export const getDocData = async (docRef: DocumentReference<DocumentData>) => {
  const doc = await getDoc(docRef)
  if (doc.exists()) {
    return doc.data()
  } else {
    throw new Error("Document does not exist")
  }
}
