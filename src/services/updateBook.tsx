import { doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function updateBook(userID, bookID) {

  const washingtonRef = doc(database, userID, "DC");

  await updateDoc(washingtonRef, {
    capital: true,
  });
}
