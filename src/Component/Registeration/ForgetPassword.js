import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Button, Text } from 'react-native';
import CustomInput from "../CustomInput/CustomInput";
import logo from "../../../Images/logo.jpg";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
// services
import { Auth } from '../../Services';

const { width, height } = Dimensions.get('window');

export default function ForgetPassword() {

    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    // const navigation = useNavigation();
    // const backLogin = () => {
    //     console.warn("back");
    //     navigation.navigate('SignIn');
    // }
    const backLogin = () => {
        // console.warn("on SignUp Pressed");
        navigation.navigate('SignIn');
    }
    return (

        <View style={styles.container}>


            {/* logo image */}
            <Image source={logo}
                style={[styles.img,
                { height: height * 0.3 },
                { width: width * 0.5 }]}

            />
            <Text style={styles.titleText}>RESET PASSWORD</Text>
            <CustomInput
                style={styles.customizeInput}
                placeholder="Email"
                value={email}
                setValue={setEmail} />





            <CustomButton
                button_text="Forget Password"
                on_Press={() => Auth.forgetPassword(email)}
            />
         


            <CustomButton
                button_text="Back to Login"

                on_Press={backLogin}
                type="TERTIARY" />
   <Button
                title=''
                color= "#0d0d0d"
            />
           <Button
                title=''
                color= "#0d0d0d"
                
            />
              <Button
                title=''
                color= "#0d0d0d"
            />
        </View>

    )
}

const styles = StyleSheet.create({
    wholeScreen: {
        flex: 1,
        backgroundColor: "#0d0d0d",
        //     backgroundColor:"red"
    },

    container: {
        height,
        width,
        flex: 1,
        backgroundColor: "#0d0d0d",
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 24,
        marginVertical: 10,
        padding: 10,
        fontFamily: "Cochin",
        color: "white",
        textAlign: 'center'

    },



});