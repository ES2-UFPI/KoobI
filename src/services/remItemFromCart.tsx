import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function remItemFromCart(userID, indexBook) {
  try {
    const userRef = doc(database, "Users", userID);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data();
    const updatedList = [...userData["shopCart"]];
    updatedList.splice(indexBook, 1);
    await updateDoc(userRef, { ["shopCart"]: updatedList });
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}
