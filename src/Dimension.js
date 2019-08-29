

import React, {Component} from 'react';
import { View,Text, StyleSheet, Platform, Dimensions} from 'react-native';
import SuperText from './widget/SuperText'



export default class Dimension extends Component {  
  checkSupport = ()=>{
    if(Platform.OS==="ios") {
        if (Platform.Version>12.1) {
           return false
        }
    } else {
      if(Platform.OS==="android"){
        if (Platform.Version>28) {
          return false
        }
      }
    }
    return true
  }
  render() {
    //console.warn(Platform.Version);
    console.warn(Dimensions.get("screen"))
    console.warn(Dimensions.get("window"));
    
    return (
      <View style={styles.container}>
      {this.checkSupport() ?
        <SuperText
          style={styles.PlatformSelect}
        >
          {Platform.OS ==="android" ?
           " Welcome to your android device" 
          :
          " Ios My foot"}
        </SuperText>
       : 
       <Text>  This device is not supported</Text>
       }
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
  PlatformSelect:{
    ...Platform.select({
      ios:{
        backgroundColor:"red"
      },
      android:{
        backgroundColor:"black"
      }
    })
  }
});