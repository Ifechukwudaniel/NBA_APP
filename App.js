

import React, {Component} from 'react';
import { View,Text, StyleSheet, Animated} from 'react-native';
import DeviceInfo from "react-native-device-info"
import Dimension from './src/Dimension';
export default class App extends Component {     
  render() {    
    return (
      <View style={styles.container}>
        <Text> Am Working ooo</Text>
      </View>   
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fffff5',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});