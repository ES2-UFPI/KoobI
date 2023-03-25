import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function listAllBooksByUser(userID) {

  const books = collection(database, userID);
  const booklist = [];

  try {
    const queryTitle = query(books);
    const querySnapshotTitle = await getDocs(queryTitle);
    querySnapshotTitle.forEach((doc) => {
    booklist.push({id: doc.id ,...doc.data()});
  });
  } catch (e) {
    console.error("Error getting document: ", e);
  }

return booklist;

}
