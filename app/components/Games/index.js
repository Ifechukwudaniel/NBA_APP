

import React, {Component} from 'react';
import { View,Text, StyleSheet,} from 'react-native';
export default class GamesComponent extends Component {     
  render() {    
     const Nav = RootNavigator()
    return (
      <View>
        <Text> The Games Component</Text>
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