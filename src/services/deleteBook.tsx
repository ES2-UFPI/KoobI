import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default async function deleteBook(text) {

  const bookRef = doc(db, "livros", text);
  
  try{
    await deleteDoc(bookRef);
    console.warn(bookRef, " => foi deletado");
  } catch (e) {
    console.error('Error deleting document: ', e)
  }

}
