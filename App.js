import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppContainer from './src/Navigation/AppContainer';

const App = () => {
  return (
    <View style={styles.container}>
      <AppContainer />
      {/* <TipsList/> */}
    </View>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default App;

