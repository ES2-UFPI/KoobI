import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";


export default async function addBook(userID, book) {
  try {
    // console.log(book);
    const docRef = doc(database, "Users", userID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      const currentBooks = userData.livros || []; // Se o array não existir, crie um novo
      const newBooks = [...currentBooks, book];
      await updateDoc(docRef, { livros: newBooks });
      // console.log("Document written with ID: ", userData.livros);
    } else {
      console.log("Documento não encontrado!");
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  try {
    const docRef = await addDoc(collection(database, "livros"), book);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}