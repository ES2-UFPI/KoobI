import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default async function logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      return "Sign-out successful.";
    })
    .catch((error) => {
      // An error happened.
    });
}
