

import React, {Component} from 'react';
import { View,Text, StyleSheet,} from 'react-native';
export default class NewsComponent extends Component {     
  render() {    
    return (
      <View>
          <Text> The News Components</Text>
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