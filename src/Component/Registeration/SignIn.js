import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from "react-native";
import logo from "../../../Images/logo.jpg";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "../../Services";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //height to set logo according to screen 
    const { height } = useWindowDimensions();

    const navigation = useNavigation();

    //forget button functionality
    const onForgetPressed = () => {
        // console.warn("forget Pressed");
        navigation.navigate('Forget Password');
    }
    //signup button functionality
    const onSignUpPressed = () => {
        // console.warn("on SignUp Pressed");
        navigation.navigate('SignUp');
    }
    return (
        <ScrollView style={styles.wholeScreen}>
            <View style={styles.container}>
                {/* logo image */}
                <Image source={logo}
                    style={[styles.img,
                    { height: height * 0.3 }]}

                />
                {/* name of App*/}
                <Text style={styles.titleText}>EXPERT COVID ALERT</Text>

                {/* username text input */}

                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail} />
                {/* password  text input */}

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />
                {/* forget button  */}

                <CustomButton
                    button_text="Forget Password?"
                    on_Press={onForgetPressed}

                    type="TERTIARY" />
                {/* signIN button */}

                <CustomButton
                    button_text="Sign In"
                    on_Press={() => Auth.signIn(email, password)} />

                <CustomButton

                    button_text="Don't have an account? Sign Up"
                    on_Press={onSignUpPressed}
                    type="TERTIARY" />
            </View>
        </ScrollView>
    )
};









//style sheet 

const styles = StyleSheet.create({

    wholeScreen: {
        flex: 1,

        backgroundColor: "#0d0d0d",
        //     backgroundColor:"red"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0d0d0d",
        //     backgroundColor:"red"
    },
    img: {

        marginVertical: 15,
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,


    },
    titleText: {
        fontSize: 30,
        marginVertical: 20,
        padding: 10,
        color: "white"
    },

});