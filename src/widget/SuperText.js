import React from "react";
import {StyleSheet, Text,View} from "react-native"

const SuperText = ()=>{
     return(
       <View>
         <Text style={styles.superText}> Just a test</Text>
      </View>
     )
}

const styles = StyleSheet.create({
  superText:{
    backgroundColor:"blue",
    fontSize:20,
    color:"white",
    padding:10,
    width:300
  }
})

export default  SuperText