
import React from 'react';
import { RadioButton } from 'react-native-paper';
import { View,Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// export default class Status extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Status Screen</Text>
//       </View>
//     )
//   } 
// }

const Status = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View
      style={styles.container}>
      <TouchableOpacity onPress={myReport}><Text>press me</Text>
      </TouchableOpacity>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />

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
