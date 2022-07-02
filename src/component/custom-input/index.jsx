import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.inputStyle}
        secureTextEntry={secureTextEntry}
        placeholderTextColor='white'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#A30000",
    borderColor: "#4d0000",
    borderRadius: 3,
    borderWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  inputStyle: {
    color: "white",
    fontSize: 22,
  },
});
export default CustomInput;
