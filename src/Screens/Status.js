
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Status = () => {
  const myReport = async () => {

    const shareOption = {
      message: 'HI,my friends i want to say that my covid report is positive. so anyOne from you recently met with me. Qurantine YOURSELF REMBER ME IN YOUR PRAYER  ',
    }
<<<<<<< HEAD
    // try {
    //   const shareResponse = await Share.open(shareOption);
    //   console.log(JSON.stringify(shareResponse));
=======
    try {
      // const shareResponse = await Share.open(shareOption);
      // console.log(JSON.stringify(shareResponse));
>>>>>>> f1bee32b22093c8897ce5fc1f171ab1d39312732

    // }
    // catch (error) {
    //   console.log('error =>', error);
    // }
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
