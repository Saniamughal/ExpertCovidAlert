import { Alert } from 'react-native';
import { createUserWithEmailAndPassword, auth, signInWithEmailAndPassword, signOut } from '../Firebase/config';

const signUp = async (fullName, email, password) => {
    if (!fullName || !email || !password) {
        Alert.alert('Error', 'Please enter all fields')
    }
    const { uid } = await createUserWithEmailAndPassword(auth, email, password)
    if (uid)
        return uid
    else
        return false

}

const signIn = async (email, password) => {
    try {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter all fields')
        }
        const { uid } = await signInWithEmailAndPassword(auth, email, password)
        return uid
    } catch (error) {
        console.log("🚀 ~ file: Auth.js ~ line 36 ~ signIn ~ error", error)
    }
}

const forgetPassword = (email) => {
    if (!email) {
        Alert.alert('Error', 'Please enter email')
    }

    // return auth().sendPasswordResetEmail(email)
}

const logOut = async () => {
    await signOut(auth)
}

const Auth = {
    signUp,
    signIn,
    forgetPassword,
    logOut
}
export default Auth;