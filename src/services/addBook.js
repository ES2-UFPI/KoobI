import { collection, addDoc } from "firebase/firestore";
import db from "./firebaseConfig"

async function addBook(book){
    try {
        console.log(book);
        const docRef = await addDoc(collection(db, 'livros'), book);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export default addBook
