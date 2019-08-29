import React, { Component } from 'react';
import { View , StyleSheet} from "react-native"

export default class AnimTwo extends Component {
  render() {
    return (
        <View style={styles.container}>
           <View style={styles.redSquare}>

           </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:"#fff"
    },
    redSquare:{
        padding:30,
        alignSelf:"center"
     }
})