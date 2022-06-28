import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD

// import navigators
import AppNavigation from './AppNavigation';
import StackNav from './StackNav';

// firebase auth
import { auth, onAuthStateChanged } from '../../Firebase/config';

const AppContainer = () => {
  // Set an initializing state whilst Firebase connects
=======


// import navigators
import AppNavigation from './AppNavigation';
import StackNav from './StackNav'
import { auth, onAuthStateChanged } from '../../Firebase/config'

const AppContainer = () => {
>>>>>>> f1bee32b22093c8897ce5fc1f171ab1d39312732
  const [user, setUser] = useState(null);

  // Handle user state changes
  async function onAuthStateChange() {
<<<<<<< HEAD
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        setUser(user);
      } else {
        setUser(null)
      }
    });
=======
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
        }
      })
    } catch (error) {
      console.log('[ERROR]', error)
    }
>>>>>>> f1bee32b22093c8897ce5fc1f171ab1d39312732
  }

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
    onAuthStateChange()
  }, []);

<<<<<<< HEAD
  // if (initializing) return null;

=======
>>>>>>> f1bee32b22093c8897ce5fc1f171ab1d39312732
  return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <StackNav />}
    </NavigationContainer>
  )
}
export default AppContainer;