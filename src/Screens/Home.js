import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import logo from "../../Images/logo.jpg";
import {
  View,
  Text,
  StyleSheet,
  Image,
  
 
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Cards from '../Component/CustomCard/Card';

const Home = () => {


  const url = "https://api.covid19api.com/summary";
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchCovidData = async () => {
      setIsloading(true);
      try {
        const result = await fetch(url);
        const response = await result.json();
        setData(response.Countries[131])
        setIsloading(false);
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchCovidData();
  }, []);


  return (

    <View style={styles.container}>
      <Text style={styles.covidHeading}>COVID19 DASHBOARD</Text>
      <View style={styles.cards}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 170 }}
        >
          <Cards
            icon="pulse"
            title="Total Cases"
            bg="#D93B4A"
            number={data ? data.TotalConfirmed : 0}
          />

          <Cards
            icon="medkit"
            title="Recovered"
            bg="#FFF"
            number={data ? data.TotalRecovered : 0}
          />

          <Cards
            icon="nuclear"
            title="Deaths"
            bg="#FFF"
            number={data ? data.TotalDeaths : 0}
          />
       
        </ScrollView>    
      </View>
   

     <View>
     <Image source={logo}
                    style={styles.imageStyle
                    }

                />
     </View>
    </View>
  
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



