import { doc, updateDoc, getDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function updateCart(userID, listBooks) {

  try {
    const userRef = doc(database, "Users", userID);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const currentRequests = userData.pedidos || []; // Se o array não existir, crie um novo
      const newRequests = [...currentRequests, listBooks];
      await updateDoc(userRef, { pedidos: newRequests });
      console.log("Document written with ID: ", userData.pedidos);
    } else {
      console.log("Documento não encontrado!");
    }

    const updatedList = [];
    await updateDoc(userRef, { ["shopCart"]: updatedList });
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
    
}

