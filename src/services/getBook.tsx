import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

const livros = collection(db, "livros");

async function getBook(value) {
  const queryTitle = query(livros, where("title", "==", value));
  const queryAuthor = query(livros, where("author", "==", value));
  
  const querySnapshot = await getDocs(livros)
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

  const querySnapshotTitle = await getDocs(queryTitle);
  querySnapshotTitle.forEach((doc) => {
    console.warn("Por Titulo =  ", doc.id, " => ", doc.data());
  });

  const querySnapshotAuthor = await getDocs(queryAuthor);
  
  querySnapshotAuthor.forEach((doc) => {
    console.warn("Por Autor =  ", doc.id, " => ", doc.data());
  });
}

export default getBook;
