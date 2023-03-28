import { doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

export default async function updateUser(userID) {

  const washingtonRef = doc(database, "Users", userID);
/*
  await updateDoc(washingtonRef, {
    capital: true,
  });

// Para objetos aninhados
  await updateDoc(frankDocRef, {
    "age": 13,
    "favorites.color": "Red"
});

// Para matrizes

// Atomically add a new region to the "regions" array field.
await updateDoc(washingtonRef, {
    regions: arrayUnion("greater_virginia")
});

// Atomically remove a region from the "regions" array field.
await updateDoc(washingtonRef, {
    regions: arrayRemove("east_coast")
});
*/

}
