

import React, {Component} from 'react';
import { View,Text, StyleSheet, Image, Button, Platform, PermissionsAndroid     } from 'react-native';
import Contacts from "react-native-contacts"


export default class App extends Component {
  state = {
    contacts:[]
  }
  async requestContactPermission(){
    if (Platform.OS ==="ios"  ) {
        return true
    } else {
       const granted= await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS
        ]);
        if (
          (granted['android.permission.READ_CONTACTS']===PermissionsAndroid.RESULTS.GRANTED)
         && (granted['android.permission.WRITE_CONTACTS']===PermissionsAndroid.RESULTS.GRANTED)
         )
          {
           return  true
        } else {
           return false
        }
    }
  }

  getContact=()=>{
    this.requestContactPermission()
  .then((response)=>{
    //  if (response===true) {
    //      Contacts.getAll((err, contacts)=>{
    //        if(err)
    //         console.warn(err)
    //       this.setState({contacts})
    //      })
    //  } else {
    //     alert("no permission")
    //  }
    if(response===true){
      // Contacts.openContactForm({
      //   givenName:"testing",
      //    phoneNumbers:[{
      //      label:"testing",
      //     number:"08034055074"
      //    }]
      // }, (err, contact)=>{
      //   if(err)
      //   console.warn(err)
      // console.warn(contact)
      // })
      // Contacts.openExistingContact({recordID:"1", givenName:"Daniel"}, (err, contact)=>{
      //   console.warn(contact)
      // })
      
    }
    else{
      alert("No permission")
    }
      
  })
  }

  render() {
    return (
      <View style={styles.container}>
      {this.state.contacts.map((item ,i)=>(
        <Text key={i}> {item.givenName}  </Text>
      ))}
        <Button title="Load Contacts" onPress={this.getContact}/>
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