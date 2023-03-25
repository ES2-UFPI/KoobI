import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebaseConfig";

export default async function listAllBooksByUser(userID) {

  const livros = collection(db, userID);
  const booklist = [];

  try {
    const queryTitle = query(livros);
    const querySnapshotTitle = await getDocs(queryTitle);
    querySnapshotTitle.forEach((doc) => {
    booklist.push({id: doc.id ,...doc.data()});
  });
  } catch (e) {
    console.error("Error getting document: ", e);
  }

  
  try {
    const queryAuthor = query(livros);
    const querySnapshotAuthor = await getDocs(queryAuthor);
    querySnapshotAuthor.forEach((doc) => {
    booklist.push({id: doc.id ,...doc.data()});
  });
  } catch (e) {
    console.error("Error getting document: ", e);
  }

return booklist;

}