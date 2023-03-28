import { doc, updateDoc, getDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function updateBook(userID, bookID, book) {

  try {
    const docRef = doc(database, "Users", userID);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    const updatedObject = { ...docData["livros"][bookID], ...book };
    const updatedList = [
      ...docData["livros"].slice(0, bookID),
      updatedObject,
      ...docData["livros"].slice(bookID + 1),
    ];
    await updateDoc(docRef, { ["livros"]: updatedList });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
    
}

