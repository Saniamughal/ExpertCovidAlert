import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-community/google-signin';

// import navigators
import AppNavigation from './AppNavigation';
import StackNav from './StackNav';

// firebase auth
import auth from  'firebase/auth';



const  AppContainer= () => {
    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

   // Handle user state changes
    function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {  
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

    return(
        <NavigationContainer>
            { user ? <AppNavigation /> : <StackNav /> }
        </NavigationContainer>
    )
}
export default AppContainer;