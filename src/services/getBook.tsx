import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default async function getBook(text) {

  const livros = collection(db, "livros");

  let book = {}

  try {
    const queryTitle = query(livros, where("title", "==", text));
    const querySnapshotTitle = await getDocs(queryTitle);
    querySnapshotTitle.forEach((doc) => {
    //console.warn("Por Titulo =  ", doc.id, " => ", doc.data());
    book = doc.data();
  });
  } catch (e) {
    console.error("Error getting document: ", e);
  }

  
  try {
    const queryAuthor = query(livros, where("author", "==", text));
    const querySnapshotAuthor = await getDocs(queryAuthor);
    querySnapshotAuthor.forEach((doc) => {
    //console.warn("Por Autor =  ", doc.id, " => ", doc.data());
    book = doc.data();
  });
  } catch (e) {
    console.error("Error getting document: ", e);
  }
  
return book;

}
