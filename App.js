

import React, {Component} from 'react';
import { View,Text, StyleSheet, Image, Button, Platform, PermissionsAndroid} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>  Test </Text>
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
  }
});