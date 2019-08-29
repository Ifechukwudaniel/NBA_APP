

import React, {Component} from 'react';
import { View,Text, StyleSheet} from 'react-native';
import Icon  from "./src/Icon"



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon/>
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