import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AppLoading from "../../component/app-loading";
import navString from "../../navigation/nav-string";
import { logOut } from "../../services";

const Remainder = ({ navigation }) => {
  const [loading, setLoading] = useState(false); // hooks to take and set password
  const onPressSignOut = async () => {
    setLoading(true);
    await logOut();
    setLoading(false);
    navigation.navigate(navString.SIGNIN);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <AppLoading />
      ) : (
        <TouchableOpacity onPress={() => onPressSignOut()}>
          <Text style={styles.textStyle}>Sign Out</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#090c0d",
    paddingHorizontal: 8,
  },
  textStyle: {
    color: "#fff",
    fontSize: 30,
  },
});
export default Remainder;
