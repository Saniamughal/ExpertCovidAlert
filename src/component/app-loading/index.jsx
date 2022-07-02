import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const AppLoading = () => {
  return (
    <View style={styles.lottie}>
      <LottieView
        autoPlay
        speed={3}
        style={{ height: 200 }}
        source={require("../../assets/animations/scanner.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    backgroundColor: "black",
    position: "absolute",
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});

export default AppLoading;
