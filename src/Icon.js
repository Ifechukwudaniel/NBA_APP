import React, {Component} from 'react';
import { View,Text, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/dist/EvilIcons"
import ImagePicker from "react-native-image-picker"

export default class IconComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Icon.Button
       name="sc-facebook"
       size={30}
      onPress={()=>alert("test")}
        
      >
       <Text style ={{ color:"#fff", fontSize:15}}> Login with facebook</Text>
      </Icon.Button>
      {/* <TouchableOpacity onPress ={()=>ImagePicker.launchCamera({}, (response)=>{
         if(response.error)
         console.warn(response.err)
      })}>
      <Icon
          name="camera"
          color="red"
          size={80}
          style={{
            borderRadius:1000,
            borderColor:"black",
            padding:10,
            borderWidth:1,
            textAlign:"center",
            backgroundColor:"lightgray"
          }}
        />
        </TouchableOpacity> */}
     </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fffff5',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
});