import { collection, addDoc } from "firebase/firestore";

async function addBook(book){
    try {
        const docRef = await addDoc(collection(db, "users"), book);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export default addBook
