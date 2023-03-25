import { collection, addDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function addatabaseook(userID ,book) {
  try {
    console.log(book);
    const docRef = await addDoc(collection(database, userID), book);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
