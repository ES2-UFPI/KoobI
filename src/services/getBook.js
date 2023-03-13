import { collection, getDocs } from "firebase/firestore";

async function getBook(id){
    const querySnapshot = await getDocs(collection(db, "livros"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
}

export default getBook
