import React from 'react';
import { useRoute } from '@react-navigation/native';
import {View,StyleSheet,Text,Image,ScrollView} from 'react-native';

const TipsDescripton= () => {
  const route = useRoute();

  return (
    <View style={styles.container}> 
  <Text style={styles.titleText}>Wear a mask.Save lives.  </Text>
  <Image
        style={styles.imageStyle}
        source={require('../assets/Images/mask.jpg')}
      />
      <ScrollView><Text  style={styles.item}>{route.params.name}</Text></ScrollView>
    
  </View>
  )

};

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#1c2732"
   
  },
  titleText: {
    fontSize: 20,
    backgroundColor: '#A30000',
    textAlign: "center",
    marginVertical: 1,
    padding: 10,
    color: "white",
    fontFamily: "Cochin",
    fontWeight:'bold',
    marginTop: 0,
    height:50

  },
  item: {
  lineHeight: 50,
   color:'white',
    padding:40,
    fontSize: 24,
    fontFamily: "Cochin",
    marginVertical:10,
  },
 imageStyle:{
   
   height:300,
   width:400
 },
 imageStyle:{
  height:300,
  width:400
}
});
export default TipsDescripton;
