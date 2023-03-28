import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function addItemToCart(userID, book) {
    try {
        console.log(book);
        const docRef = doc(database, "Users", userID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          const carrinho = userData.carrinho || []; // Se o array não existir, crie um novo
          carrinho.push(book);  
          
          await updateDoc(docRef, { carrinho });
          console.log("Document added to cart with ID: ", book.ID);
        } else {
          console.log("Documento não encontrado!");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
