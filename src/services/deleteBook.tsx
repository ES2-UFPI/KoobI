import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function deleteBook() {
  const bookRef = doc(db, "livros", "BJ");

  await deleteDoc(bookRef);
}

export default deleteBook;
