import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "./firebaseConfig";

const [text, setText] = useState("");
const [results, setResults] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const users = collection(database, "Users");

      const queryTitle = query(users, where("name", "==", text));
      const querySnapshotTitle = await getDocs(queryTitle);
      const list = [];
      querySnapshotTitle.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        list.push({ ...doc.data(), id: doc.id });
      });
      setResults(list);
    }
    getUsers();
  }, [text]);