import React from 'react';
import SignIn from '../Screens/Registeration/SignIn';
import SignUp from '../Screens/Registeration/SignUp';
import ForgetPassword from '../Screens/Registeration/ForgetPassword';
import NavString from './NavString';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NavString.SIGNIN}
        component={SignIn} />

      <Stack.Screen
        name={NavString.SIGNUP}
        component={SignUp} />

      <Stack.Screen
        name={NavString.FORGETPASSWORD}
        component={ForgetPassword} />

    </Stack.Navigator>
  );
};


export default StackNav;