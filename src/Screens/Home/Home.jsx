import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React, { Component, useEffect, useRef, useState } from 'react';

import logo from "../../../Images/logo.jpg";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button, DrawerLayoutAndroid
 
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Cards from '../../Component/CustomCard/Card';
import axios from 'axios';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createNavi();
const Home = () => {


  const url = "https://api.covid19api.com/summary";
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()
        }
      />
      <Button
        onPress={() => nav.navigate('Status')}
        title="Staus"
      />
    
      
    </View>
    
  );

  useEffect(() => {
    const fetchCovidData = async () => {
      setIsloading(true);
      try {
        axios.get(url)
        .then(function (response) {
          let result = response.data;
          setData(result.Countries[131])
          setIsloading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
        
      }
      catch (e) {
        console.log("sdsdsd",e)
      }
    }
    fetchCovidData();
  }, []);


  return (
    // <DrawerLayoutAndroid
    //   ref={drawer}
    //   drawerWidth={300}
    //   drawerPosition={drawerPosition}
    //   renderNavigationView={navigationView}
    // >
    // <View style={styles.container}>
    //   <Text style={styles.covidHeading}>COVID19 DASHBOARD</Text>
    //   <View style={styles.cards}>
    //     <ScrollView
    //       horizontal
    //       showsHorizontalScrollIndicator={false}
    //       style={{ marginTop: 170 }}
    //     >
    //       <Cards
    //         icon="pulse"
    //         title="Total Cases"
    //         bg="#D93B4A"
    //         number={data ? data?.TotalConfirmed ?? 0 : 0}
    //       />

    //       <Cards
    //         icon="medkit"
    //         title="Recovered"
    //         bg="#FFF"
    //         number={data ? data?.TotalRecovered ?? 0 : 0}
    //       />

    //       <Cards
    //         icon="nuclear"
    //         title="Deaths"
    //         bg="#FFF"
    //         number={data ? data?.TotalDeaths ?? 0 : 0}
    //       />
       
    //     </ScrollView>    
    //   </View>
   

    //  <View>
    //  <Image source={logo}
    //                 style={styles.imageStyle
    //                 }

    //             />
    //  </View>
    // </View>
    // </DrawerLayoutAndroid>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090c0d"
  },
  covidHeading: {
    color: '#FFF',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 50
  },
  cards: {
    marginTop: -120,
   
  },
  imageStyle:{
    padding:10,
    marginTop:20, 
    height:400,
    width:410
  }
  
})

export default Home;







  
{/* <TouchableOpacity onPress={() => Auth.signOut()}>
                <Text>Sign Out</Text>
            </TouchableOpacity> */}



