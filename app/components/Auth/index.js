

import React, {Component} from 'react';
import { View,Text, StyleSheet,} from 'react-native';
export default class AuthComponent extends Component {     
  render() {    
    return (
      <View>
        <Text> Auth Component Here</Text>
      </View>   
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  }
});