import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default async function deleteBook(userID, bookID) {

  const bookRef = doc(db, userID, bookID);
  
  try{
    console.warn(bookRef, " => será deletado");
    await deleteDoc(bookRef);
  } catch (e) {
    console.error('Error deleting document: ', e)
  }

}
