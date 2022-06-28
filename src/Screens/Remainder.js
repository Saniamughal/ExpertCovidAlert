
import React, { useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Auth } from '../Services';
import { useNavigation } from "@react-navigation/native";

const Remainder = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);// hooks to take and set password

  const onPressSignOut = () => {
    setLoading(true)
    Auth.logOut()
    navigation.navigate('SignIn');
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      {
        loading && <ActivityIndicator />
      }
      <TouchableOpacity onPress={() => onPressSignOut()}>
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
