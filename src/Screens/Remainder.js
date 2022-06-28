
import React, { useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Auth } from '../Services';
import NavString from '../Component/Navigation/NavString';

const Remainder = ({ navigation }) => {
  const [loading, setLoading] = useState(false);// hooks to take and set password
  const onPressSignOut = () => {
    setLoading(true)
    Auth.logOut()
    navigation.navigate(NavString.SIGNIN)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      {
        loading ? <ActivityIndicator /> :
          <TouchableOpacity onPress={() => onPressSignOut()}>
            <Text style={styles.textStyle}>Sign Out</Text>
          </TouchableOpacity>
      }
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#090c0d",
    paddingHorizontal: 8

  },
  textStyle: {
    color: '#fff',
    fontSize: 30,
  }
});
export default Remainder;
