

import React, {Component} from 'react';
import { View,Text, StyleSheet, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends Component {
  state={
    avatar:''
  }
  addImage=()=>{
   
    //  ImagePicker.showImagePicker({
    //    title:"Add you Profile Image",

    //  },(response)=>{
    //     if(response.didCancel){
    //       alert("But you need a profile picture")
    //     }
    //     else if (response.error) {
    //       console.warn(response.error)
    //     }
    //     else{
    //       this.setState({avatar:response.uri})
    //     }
    //  })
    // ImagePicker.launchCamera({}, ()=>{

    // })
    ImagePicker.launchImageLibrary({},()=>{
      
    })
  }
  render() {
    return (
       <View  style={styles.container}>
          <Image source={{uri:this.state.avatar}} style={styles.avatar} />
          <Button title="Add and image" onPress={()=>this.addImage()}/>
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
  },
  avatar:{
    width:"100%",
    height:300
  }
});

