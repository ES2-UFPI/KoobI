import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default async function addBook(userID ,book) {
  try {
    console.log(book);
    const docRef = await addDoc(collection(db, userID), book);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
