import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Icon from "react-native-ionicons";

const CustomCard = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: props.bg,
      }}
    >
      {/* <View style={styles.col}>
        <Icon name={props.icon} size={0} color={props.bg == "#D93B4A" ? "#fff" : "red"} />
      </View> */}
      <Text style={styles.title}>{props.title}</Text>
      <Text
        styles={{
          ...styles.number,
          color: props.bg == "#D93B4A" ? "#FFF" : "#000",
        }}
      >
        {props.number}
      </Text>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    borderRadius: 30,
    padding: 15,
    marginLeft: 20,
  },
  col: {
    flexDirection: "row",
    paddingTop: 5,
  },
  title: {
    marginTop: 22,
    color: "#b8a8aa",
    fontWeight: "bold",
    flexShrink: 12,
    fontSize: 16,
  },
  number: {
    fontWeight: "bold",
    color: "#black",
    margin: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
});
