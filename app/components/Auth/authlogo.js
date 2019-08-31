import React, {Component} from 'react';
import {Image,View, Animated, Easing} from 'react-native'
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
                        style={{
                            width:150,
                            height:100,
                        }}
                    />
                </Animated.View>
            </View>   
        );
    }
}

export default LogoComponent