import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

const livros = collection(db, "livros");

async function getBook(value) {

  try {
    const queryTitle = query(livros, where("title", "==", value));
    const querySnapshotTitle = await getDocs(queryTitle);
    querySnapshotTitle.forEach((doc) => {
    console.warn("Por Titulo =  ", doc.id, " => ", doc.data());
    return doc.data()
  });
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  
  try {
    const queryAuthor = query(livros, where("author", "==", value));
    const querySnapshotAuthor = await getDocs(queryAuthor);
    querySnapshotAuthor.forEach((doc) => {
    console.warn("Por Autor =  ", doc.id, " => ", doc.data());
    return doc.data()
  });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
/*  
  const querySnapshotTitle = await getDocs(queryTitle);
  querySnapshotTitle.forEach((doc) => {
    console.warn("Por Titulo =  ", doc.id, " => ", doc.data());
    //return doc.data()
  });

  const querySnapshotAuthor = await getDocs(queryAuthor);
  querySnapshotAuthor.forEach((doc) => {
    console.warn("Por Autor =  ", doc.id, " => ", doc.data());
    //return doc.data()
  });
  */
}

export default getBook;
