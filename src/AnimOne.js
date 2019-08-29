

import React, {Component} from 'react';
import { View,Text,Button, StyleSheet, Animated, Easing} from 'react-native';
export default class AnimOne extends Component {     
  constructor(props) {
    super(props)
    // this.state ={
    //   redSquare : new Animated.ValueXY(0,0)
    // }

    this.state ={
      redSquare : new Animated.Value(0)
    }
    
    // this.redSquare= new Animated.ValueXY(0,0)
  }

  // componentDidMount(){
  //   Animated.timing( this.redSquare, {
  //      toValue:{x:100, y:300},
  //      duration:1000,
  //      delay:500,
  //      easing:Easing.elastic(3)
  //   }).start()
  // }

  //  animateSquare = ()=>{
  //     Animated.timing(
  //          this.state.redSquare , {
  //             toValue:{x:300, y:300},
  //             duration:1000,
  //             delay:500,
  //             easing:Easing.bounce
  //          }
  //     ).start()
  //  }

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
      <Animated.View
       style={{
          opacity: this.state.redSquare
       }}>
          <View style={styles.redSquare}>

          </View>
        </Animated.View>
        <View style={styles.viewButton}>
            <Button title=" click me" onPress={this.animateSquare} />
        </View>
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