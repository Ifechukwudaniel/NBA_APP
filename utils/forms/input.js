import React from "react"
import { Text , View , TextInput, Picker, StyleSheet,P } from 'react-native';

const input =(props)=>{
  let template=null
  switch (props.type) {
      case "textinput":
        template=  <TextInput
        style={[styles.textInput, props.overrideStyle]}
        onChangeText={props.onChangeText}
            underlineColorAndroid="transparent"
            {...props}
        />
        return template
      default:
        return template;
  }
}

const styles= StyleSheet.create({
     textInput:{
         color:'#fff',
         textDecorationColor:"#fff" ,
         fontWeight:"bold",
         fontStyle:"normal",
         borderColor:"#fff",
         borderBottomWidth:0.5,
         marginTop:10,
         width:'100%',
         borderRadius:5
     },
})
export default input