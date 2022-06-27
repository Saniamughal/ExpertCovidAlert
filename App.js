import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

import AppContainer from './src/Component/Navigation/AppContainer';

const App=()=> {

 

  return (
<View style={styles.container}>
  <AppContainer/>
  {/* <TipsList/> */}


  </View>)
}


const styles=StyleSheet.create({
  container:{
    flex:1
  }
});
export default App;

