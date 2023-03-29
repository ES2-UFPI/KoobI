import { doc, updateDoc, getDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function updateCart(userID) {

  try {
    const userRef = doc(database, "Users", userID);
    const updatedList = [];
    await updateDoc(userRef, { ["shopCart"]: updatedList });
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
    
}

