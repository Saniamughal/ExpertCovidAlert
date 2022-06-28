import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import navigators
import AppNavigation from './AppNavigation';
import StackNav from './StackNav';

// firebase auth
import { auth, onAuthStateChanged } from '../../Firebase/config';

const AppContainer = () => {
  // Set an initializing state whilst Firebase connects
  const [user, setUser] = useState(null);

  // Handle user state changes
  async function onAuthStateChange() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        setUser(user);
      } else {
        setUser(null)
      }
    });
  }

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
    onAuthStateChange()
  }, []);

  // if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <StackNav />}
    </NavigationContainer>
  )
}
export default AppContainer;