import { doc, updateDoc, getDoc, collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function deleteBook(userID, bookID, bookTitle, bookDescription) {
  try {
    const docRef = doc(database, "Users", userID);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();
    const updatedList = [...docData["livros"]];
    updatedList.splice(bookID, 1);
    await updateDoc(docRef, { ["livros"]: updatedList });
  } catch (e) {
    console.error("Error deleting document: ", e);
  }

  try {
    const docsQuery = query(
      collection(database, "livros"),
      where("title", "==", bookTitle),
      where("description", "==", bookDescription)
    );

    const querySnapshot = await getDocs(docsQuery);

    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  } catch (e) {}
}
