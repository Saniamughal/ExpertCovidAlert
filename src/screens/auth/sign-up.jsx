import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from "react-native";
import logo from "../../assets/images/logo.jpg";
import CustomInput from "../../component/custom-input";
import CustomButton from "../../component/custom-button";
import { useNavigation } from "@react-navigation/native";
import { firebaseSignUp } from "../../services";
import navString from "../../navigation/nav-string";
import AppLoading from "../../component/app-loading";

export default function SignUp() {
  const [username, setUserName] = useState(""); //hooks to take and set username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // hooks to take and set password
  const [loading, setLoading] = useState(false); // hooks to take and set password

  const { height } = useWindowDimensions(); //to take dimension of screen height
  const navigation = useNavigation();

  //func run when user want to sign in
  const onSignInPressed = () => {
    navigation.navigate(navString.SIGNIN);
  };
  const onPressSignUp = () => {
    setLoading(true);
    firebaseSignUp({
      values: { username, email, password },
      cbSuccess: (user) => {
        setLoading(false);
        navigation.navigate(navString.HOME);
      },
      cbFailure: (err) => {
        console.log(err);
        setLoading(false);
      },
    });
  };
  return (
    <ScrollView style={styles.wholeScreen}>
      {loading && <AppLoading />}
      <View style={styles.container}>
        <Image source={logo} style={[styles.img, { height: height * 0.3 }]} />
        {/* //name of app */}
        <Text style={[styles.appName, styles.titleText]}>EXPERT COVID ALERT </Text>

        {/* username text input */}

        <CustomInput placeholder='UserName' value={username} setValue={setUserName} />

        {/* Email input  */}

        <CustomInput placeholder='Email' value={email} setValue={setEmail} />

        {/* password  text input */}

        <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true} />

        {/* sign up botton */}

        <CustomButton button_text='Sign Up' on_Press={() => onPressSignUp()} />

        {/* Sign in Button */}

        <CustomButton
          button_text='Already have an account ? Sign In'
          on_Press={onSignInPressed}
          type='TERTIARY'
        />
      </View>
    </ScrollView>
  );
}

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
  },
  img: {
    marginVertical: 15,
    width: "100%",
    maxWidth: 300,
    maxHeight: 200,
  },
  titleText: {
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
    marginVertical: 2,
    padding: 10,
    color: "white",
    marginTop: 0,
  },
  appName: {
    marginTop: 0,
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 3,
  },
});
