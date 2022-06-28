
import { initializeApp } from "firebase/app";
import { onAuthStateChanged,signOut, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC8s_Jxqsn-ZUaCP4BWhij2WIxrg3zEcUo",
  authDomain: "e-project-aeb5a.firebaseapp.com",
  databaseURL: "https://e-project-aeb5a-default-rtdb.firebaseio.com",
  projectId: "e-project-aeb5a",
  storageBucket: "e-project-aeb5a.appspot.com",
  messagingSenderId: "47829280348",
  appId: "1:47829280348:web:ae069bb32c14074359a899"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
}