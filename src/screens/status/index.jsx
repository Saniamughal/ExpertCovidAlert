import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Status = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={myReport}>
        <Text>press me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#0d0d0d",
  },
});
export default Status;
