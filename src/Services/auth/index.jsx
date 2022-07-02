import { Alert } from "react-native";
import {
  createUserWithEmailAndPassword,
  auth,
  signOut,
  signInWithEmailAndPassword,
} from "../../firebase/config";

export const firebaseSignUp = async ({ values, cbSuccess, cbFailure }) => {
  try {
    const { email, password } = values;
    const user = await createUserWithEmailAndPassword(auth, email, password);
    cbSuccess(user);
  } catch (error) {
    console.log("[SIGN UP - AUTH LINE # 19]", error);
    cbFailure(error);
  }
};

export const firebaseSignIn = async ({ values, cbSuccess, cbFailure }) => {
  try {
    const { email, password } = values;
    const user = await signInWithEmailAndPassword(auth, email, password);
    cbSuccess(user);
  } catch (error) {
    console.log("[SIGN IN - AUTH LINE # 26]", error);
    cbFailure(error);
  }
};

const forgetPassword = (email) => {
  if (!email) {
    Alert.alert("Error", "Please enter email");
  }

  // return auth().sendPasswordResetEmail(email)
};
export const logOut = async () => {
  await signOut(auth);
};
