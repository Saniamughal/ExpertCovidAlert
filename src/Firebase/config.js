
import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
=======
import { onAuthStateChanged,signOut, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
>>>>>>> f1bee32b22093c8897ce5fc1f171ab1d39312732
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
<<<<<<< HEAD
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut
=======
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
>>>>>>> f1bee32b22093c8897ce5fc1f171ab1d39312732
}