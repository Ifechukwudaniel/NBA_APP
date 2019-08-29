

import React, {Component} from 'react';
import { View,Text, StyleSheet, Animated} from 'react-native';
export default class App extends Component {     
  render() {    
    return (
      <View style={styles.container}>
        <View style={styles.redSquare}>
            
        </View>
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
  redSquare:{
    backgroundColor:"red",
    padding:40,
  }
});