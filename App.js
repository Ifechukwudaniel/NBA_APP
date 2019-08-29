

import React, {Component} from 'react';
import { View,Text, StyleSheet, Animated} from 'react-native';
import AnimOne  from "./src/AnimOne"
export default class App extends Component {     
  render() {    
    return (
      <View style={styles.container}>
        <AnimOne/>
      </View>   
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fffff5',
  },
  redSquare:{
    backgroundColor:"red",
    padding:70,
    width:100,
    height:100
  }
});