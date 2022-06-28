
import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Auth } from '../Services';
const Remainder = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Auth.logOut()}>
        <Text style={styles.textStyle}>Sign Out</Text>
      </TouchableOpacity>
    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090c0d",
    paddingHorizontal: 8

  },
  textStyle: {
    color: '#fff',
    fontSize: 30,

  }
});
export default Remainder;
