

import React, {Component} from 'react';
import { View,Text,Button, StyleSheet, Animated, Easing} from 'react-native';
export default class AnimOne extends Component {     
  constructor(props) {
    super(props)

    this.state ={
      redSquare : new Animated.Value(1),
      greenSquare: new Animated.ValueXY(0,0),
      blueSquare: new Animated.ValueXY(0,0)
    }
  } 
  animateSquare = ()=>{
     Animated.sequence([
       Animated.timing(this.state.redSquare, {
          toValue:0
       }),
       Animated.spring(this.state.greenSquare, {
          toValue:{x:200, y:300},
          bounciness:30
          
       }),
       Animated.timing(this.state.blueSquare, {
        toValue:{x:100, y:0},
        duration:500,
       })
     ]).start()
 }
  
  
  render() {    
    return (
      <View style={styles.container}>
         <View style={styles.viewButton}>
            <Button title=" click me" onPress={this.animateSquare} />
          </View>
        <Animated.View style={{
          opacity: this.state.redSquare
        }}>
              <View style={[styles.redSquare, {backgroundColor:"red"}]}>
              </View>
        </Animated.View>
        <Animated.View style={{
          left:this.state.greenSquare.x,
          top:this.state.greenSquare.y
        }}>
              <View style={[styles.redSquare,{backgroundColor:"green"}]}>
              </View>
        </Animated.View>
        <Animated.View style={{
           left: this.state.blueSquare.x
        }}>
              <View style={[styles.redSquare,{backgroundColor:"lightblue"}]}>
              </View>
        </Animated.View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fffff5',
  },
  viewButton :{
    justifyContent:"center",
    alignItems:"center"
  },
  redSquare:{
    backgroundColor:"red",
    padding:70,
    width:100,
    height:100
  }
});