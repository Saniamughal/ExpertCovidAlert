import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator ,ScrollView, useWindowDimensions } from "react-native";
import logo from "../../../Images/logo.jpg";

import CustomInput from "../../Component/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../Component/CustomButton/CustomButton";
import { Auth } from "../../Services";



export default function SignIn() {
    const navigation=useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);// hooks to take and set password


    //height to set logo according to screen 
    const { height } = useWindowDimensions();

    

    //forget button functionality
    const onForgetPressed = () => {
        console.warn("forget Pressed");
        // navigation.navigate('Forget Password');
    }
    //signup button functionality
    const onPressSignUp= () => {
      
        navigation.navigate('SignUp');
    }
    const onPressSignIn = () => {
        setLoading(true)
        Auth.signIn(email, password)
      
        setLoading(false)
    }
    return (
        <ScrollView style={styles.wholeScreen}>
              {
                loading ? <ActivityIndicator /> : null
            }
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
                    on_Press={() => onPressSignIn()} />

                <CustomButton

                    button_text="Don't have an account? Sign Up"
                    on_Press={() => onPressSignUp()}
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