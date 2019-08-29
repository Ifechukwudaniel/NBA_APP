import React from "react";
import {StyleSheet, Text,View} from "react-native"

const SuperText = (props)=>{
     return(
       <View>
         <Text  style={[styles.superText,props.style ]}> 
           {props.children}
         </Text>
      </View>
     )
}

const styles = StyleSheet.create({
  superText:{
    backgroundColor:"blue",
    fontSize:20,
    color:"white",
    padding:"5%",
    width:"100%"
  }
})

export default  SuperText