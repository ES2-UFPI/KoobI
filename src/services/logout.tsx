import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default async function logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      return "Sign-out successful.";
      //navigation.navigate("LOGIN")
    })
    .catch((error) => {
      // An error happened.
    });
}
