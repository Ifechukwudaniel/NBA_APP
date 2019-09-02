import React, {Component} from 'react';
import {Image,View, Animated, Platform, StyleSheet} from 'react-native'
import LogoImage from "../../assets/images/nba_login_logo.png"

class  LogoComponent  extends  Component{
  state={
      LogoAnimation: new Animated.Value(1) 
  }

    render() {
        return (
            <View style={{ alignItems:"center"}}>
                <Animated.View style={{
                    opacity:this.state.LogoAnimation
                }}>
                    <Image 
                         source={LogoImage}
                        resizeMode="contain"
                        style={styles.LogoImage}
                    />
                </Animated.View>
            </View>   
        );
    }
}

const styles= StyleSheet.create({
  LogoImage:{
      ...Platform.select({
          ios:{
            width:150,
            height:100,
            marginTop: 100,
          },
          android:{
            width:150,
            height:100,
          }
      })
  }
})

export default LogoComponent