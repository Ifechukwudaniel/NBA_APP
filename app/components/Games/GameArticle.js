import React, {Component} from 'react';
import { View,Text, StyleSheet,} from 'react-native';
export default class GamesArticle extends Component {     
  render() {    
    return (
      <View>
        <Text> The GamesArticle Component</Text>
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