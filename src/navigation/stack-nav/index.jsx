import React from "react";
import SignIn from "../../screens/auth/sign-in";
import SignUp from "../../screens/auth/sign-up";
import ForgetPassword from "../../screens/auth/forget-password";
import NavString from "../nav-string";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavString.SIGNIN} component={SignIn} />
      <Stack.Screen name={NavString.SIGNUP} component={SignUp} />
      <Stack.Screen name={NavString.FORGETPASSWORD} component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export default StackNav;
