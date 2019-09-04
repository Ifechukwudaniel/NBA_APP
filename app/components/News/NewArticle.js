import React, {Component} from 'react';
import { View,Text, StyleSheet,} from 'react-native';
export default class NewArticle extends Component { 

  render() {    
    console.warn(this.props)
    return (
      <View>
        <Text> The New NewArticle</Text>
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