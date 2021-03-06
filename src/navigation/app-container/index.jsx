import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import navigators
import AppNavigation from "../app-navigation";
import StackNav from "../stack-nav";
import { auth, onAuthStateChanged } from "../../firebase/config";

const AppContainer = () => {
  const [user, setUser] = useState(null);

  // Handle user state changes
  async function onAuthStateChange() {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    } catch (error) {
      console.log("[ERROR]", error);
    }
  }

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
    onAuthStateChange();
  }, []);

  return <NavigationContainer>{user ? <AppNavigation /> : <StackNav />}</NavigationContainer>;
};
export default AppContainer;
