import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function addItemToCart(userID, bookID) {
    try {
        const bookRef = doc(database, "livros", bookID);
        const bookDoc = await getDoc(bookRef);
        if (bookDoc.exists()) {
          const bookData = bookDoc.data();
          const userRef = doc(database, "users", userID);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const shopCart = userData.shopCart || [];
            const newShopCart = [...shopCart, bookData];
            await updateDoc(userRef, { shopCart: newShopCart });
            console.log("Livro adicionado ao carrinho com sucesso!");
          } else {
            console.log("Usuário não encontrado!");
          }
        } else {
          console.log("Livro não encontrado!");
        }
      } catch (e) {
        console.error("Erro ao adicionar livro ao carrinho: ", e);
      }
}
