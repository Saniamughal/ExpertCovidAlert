import React, { useState } from "react";
import { Alert, Text, View, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import logo from "../../assets/images/logo.jpg";

import CustomInput from "../../component/custom-input";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../component/custom-button";
import { Auth } from "../../services";
import navString from "../../navigation/nav-string";
import { firebaseSignIn } from "../../services";
import AppLoading from "../../component/app-loading";

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // hooks to take and set password

  //forget button functionality
  const onForgetPressed = () => {
    console.warn("forget Pressed");
    // navigation.navigate('Forget Password');
  };
  const onPressSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter all fields");
      return;
    }
    setLoading(true);
    firebaseSignIn({
      values: { email, password },
      cbSuccess: (user) => {
        navigation.navigate(navString.HOME);
        setLoading(false);
      },
      cbFailure: (err) => {
        console.log("🚀 ~ file: sign-in.jsx ~ line 39 ~ onPressSignIn ~ err", err.message);
        Alert.alert("Error", err.message);
        setLoading(false);
      },
    });
  };
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/login.jpg")} style={styles.loginImage} />
      <Text style={styles.heading}>Save the world</Text>

      <Text style={styles.paragraph}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit.
      </Text>

      <View style={styles.inputEmailContainer}>
        <Icon name='mail' color='#00716F' size={24} />
        <TextInput
          autoFocus
          autoCapitalize='sentences'
          onChangeText={setEmail}
          placeholder='john@mail.com'
          value={email}
          style={styles.input}
        />
      </View>
      <View style={styles.inputPasswordContainer}>
        <Icon name='lock' color='#00716F' size={24} />
        <TextInput
          onChangeText={setPassword}
          passwordRules
          placeholder='min 6 characters'
          minLength={6}
          value={password}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity onPress={() => onPressSignIn()} style={styles.buttonContainer}>
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.navigate(navString.SIGNUP)} style={styles.registerButton}>
        New User
      </Text>
      {loading && <AppLoading />}
    </View>
  );
}

//style sheet

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFF", height: "100%" },
  loginImage: { width: "100%", height: "43%" },
  heading: { fontSize: 30, alignSelf: "center" },
  lottie: {
    backgroundColor: "black",
    position: "absolute",
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  paragraph: {
    marginHorizontal: 55,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.4,
  },
  inputEmailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 50,
    paddingHorizontal: 10,
    borderColor: "#00716F",
    borderRadius: 23,
    paddingVertical: 6,
  },
  inputPasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 15,
    paddingHorizontal: 10,
    borderColor: "#00716F",
    borderRadius: 23,
    paddingVertical: 6,
  },
  input: { paddingHorizontal: 10 },
  buttonContainer: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#00716F",
    paddingVertical: 10,
    borderRadius: 23,
  },
  registerButton: {
    alignSelf: "center",
    color: "#00716F",
    paddingVertical: 30,
  },
});
