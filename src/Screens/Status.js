
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Status = () => {
  const myReport = async () => {

    const shareOption = {
      message: 'HI,my friends i want to say that my covid report is positive. so anyOne from you recently met with me. Qurantine YOURSELF REMBER ME IN YOUR PRAYER  ',
    }
    try {
      // const shareResponse = await Share.open(shareOption);
      // console.log(JSON.stringify(shareResponse));

    }
    catch (error) {
      console.log('error =>', error);
    }
  }
  return (
    <View
      style={styles.container}>
      <TouchableOpacity onPress={myReport}><Text>press me</Text>
      </TouchableOpacity>
    </View >

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#0d0d0d",
  }
});
export default Status;
