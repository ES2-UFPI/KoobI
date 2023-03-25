import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default async function addNewUser(email, password, { navigation }) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user.uid
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
