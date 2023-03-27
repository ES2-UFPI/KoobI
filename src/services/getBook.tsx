import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function getBook(text) {

  const livros = collection(database, "livros");
  const booklist = [];

  try {
    const queryTitle = query(livros, where("title", "==", text));
    const querySnapshotTitle = await getDocs(queryTitle);
    querySnapshotTitle.forEach((doc) => {
    booklist.push({id: doc.id ,...doc.data()});
  });
  } catch (e) {
    console.error("Error getting document: ", e);
  }

  
  try {
    const queryAuthor = query(livros, where("author", "==", text));
    const querySnapshotAuthor = await getDocs(queryAuthor);
    querySnapshotAuthor.forEach((doc) => {
    booklist.push({id: doc.id ,...doc.data()});
  });
  } catch (e) {
    console.error("Error getting document: ", e);
  }

return booklist;

}
