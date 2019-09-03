import React, {Component} from 'react';
import {Image,View, Animated, Platform, StyleSheet} from 'react-native'
import LogoImage from "../app/assets/images/nba_login_logo.png"
export default Logo = ()=>{
        return (
                    <Image 
                         source={LogoImage}
                        resizeMode="contain"
                        style={styles.LogoImage}
                    />
        );
    }

const styles= StyleSheet.create({
  LogoImage:{
      ...Platform.select({
          ios:{
            width:70,
            height:50,
            padding: 10,
          },
          android:{
            width:70,
            height:50,
            padding:10
          }
      })
  }
})