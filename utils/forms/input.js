import React from "react"
import { Text , View , TextInput, Picker, StyleSheet,Platform } from 'react-native';

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
         ...Platform.select({
           android:{
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
           ios:{
              width:"100%",
             fontWeight:"bold",
             fontStyle:"normal",
             padding: 10,
             marginBottom: 20,
             borderColor:"#fff",
             borderBottomWidth:1,
             color:"#fff"

           }
         })
     },
})
export default input