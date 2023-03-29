import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function addItemToCart(userID, store, indexBook) {
    try {
        const userRef = doc(database, "Users", userID);
        const userStore = doc(database, "Users", store);
        const userDoc = await getDoc(userRef);
        const storeDoc = await getDoc(userStore);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const storeData = storeDoc.data()
          const shopCart = userData.shopCart || [];
          const livroToAdd = storeData.livros[indexBook];
          console.log(livroToAdd);
          const newShopCart = [...shopCart, livroToAdd]
          await updateDoc(userRef, { shopCart: newShopCart });
          console.log(`Livro ${storeData.livros.title} foi adicionado ao carrinho de ${userData.name}`);
        } else {
          console.log("Usuário não encontrado!");
        }
      } catch (e) {
        console.error("Erro ao adicionar livro ao carrinho: ", e);
      }
}
