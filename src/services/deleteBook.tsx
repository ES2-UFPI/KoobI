import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function deleteBook(id) {
  const bookRef = doc(db, "livros", id);
  try{
    console.log(bookRef);
    await deleteDoc(bookRef);
  } catch (e) {
    console.error('Error deleting document: ', e)
  }

}

export default deleteBook;
