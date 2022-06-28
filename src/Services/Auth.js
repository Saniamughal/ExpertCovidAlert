import { Alert } from 'react-native';
import { createUserWithEmailAndPassword, auth, signOut,signInWithEmailAndPassword } from '../Firebase/config';

const signUp = async (fullName, email, password) => {
    if (!fullName || !email || !password) {
        Alert.alert('Error', 'Please enter all fields')
    }
    // return createUserWithEmailAndPassword(auth,email, password)
    // .then( cred => {
    //     const {uid} = cred.user;

    //     auth().currentUser.updateProfile({
    //         displayName: fullName
    //     })
    //     return uid
    // })

    // .catch(
    //     err => Alert.alert(err.code, err.message)
    // )
    const { uid } = await createUserWithEmailAndPassword(auth, email, password)
    console.log(uid)
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
        console.log(error)
    }
}
const forgetPassword = (email) => {
    if (!email) {
        Alert.alert('Error', 'Please enter email')
    }

    // return auth().sendPasswordResetEmail(email)
}
const logOut =async () => {
     await signOut(auth)
}


const Auth = {
    signUp,
    signIn,
    forgetPassword,
    logOut
}
export default Auth;