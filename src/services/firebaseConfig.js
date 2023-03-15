// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNavthvAFyFtgyIqiYQvyG50wdldopJdM",
  authDomain: "koobi-v2.firebaseapp.com",
  projectId: "koobi-v2",
  storageBucket: "koobi-v2.appspot.com",
  messagingSenderId: "269945970865",
  appId: "1:269945970865:web:d869d4272636f4f3fbc290",
  measurementId: "G-26D3FRXL2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default db


