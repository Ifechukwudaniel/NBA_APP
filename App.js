

import React, {Component} from 'react';
import { View,Text, StyleSheet} from 'react-native';
import DeviceInfo from "react-native-device-info"
import Dimension from './src/Dimension';
export default class App extends Component {     
  render() {    
   DeviceInfo.getBatteryLevel()
   .then(batteryLevel=>{
      console.warn(batteryLevel)
   })

   console.warn(DeviceInfo.isLandscape());
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