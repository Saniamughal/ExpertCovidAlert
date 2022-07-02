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

    // return auth().signInWithEmailAndPassword(email, password)
    // .then(() => {})
    // .catch(
    //     err => Alert.alert(err.code, err.message)
    // )
    try {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter all fields')
        }
        const user = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        return error;
        

    }
}

const forgetPassword = (email) => {
    if (!email) {
        Alert.alert('Error', 'Please enter email')
    }

    // return auth().sendPasswordResetEmail(email)
}
const logOut = async () => {
    try{
        await signOut(auth)

    }catch(e){
        console.log(e)
    }
}

const Auth = {
    signUp,
    signIn,
    forgetPassword,
    logOut
}
export default Auth;