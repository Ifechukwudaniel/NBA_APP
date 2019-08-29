

import React, {Component} from 'react';
import { View,Text, StyleSheet} from 'react-native';
import SuperText from "./src/widget/SuperText"



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SuperText
          style={{
            backgroundColor:"green"
          }}
        >
            Just Testing react Native 
        </SuperText>
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