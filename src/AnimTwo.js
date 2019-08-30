import React, { Component } from 'react';
import { View,Text,Button, StyleSheet, Animated, Easing} from 'react-native';


export default class AnimTwo extends Component {
   state={
      redSquare : new Animated.Value(0)
   }
   animateSquare = ()=>{
      Animated.timing(
           this.state.redSquare , {
              toValue:1,
              duration:1000,
              delay:500,
           }
      ).start()
   }
  render() {
    return (
        <View style={styles.container}>
         <Animated.Text style={{
            fontSize: this.state.redSquare.interpolate({
               inputRange:[0,.5, .9,1],
               outputRange:[10,30,50,60]
            }),
            color:this.state.redSquare.interpolate({
               inputRange:[0,0.5, 1],
               outputRange:['red', 'green',"blue"]
            })
         }}>
            <Text> JUST testing</Text>
         </Animated.Text>
         <View style={styles.viewButton}>
            <Button title="Run animation" onPress={this.animateSquare}/>
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
    viewButton :{
      justifyContent:"center",
      alignItems:"center"
    },
    redSquare:{
        padding:70,
        backgroundColor:"#ff7733",
        width:100,
        height:100
     }
})