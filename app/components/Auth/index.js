

import React, {Component} from 'react';
import { View,Text, StyleSheet,  Button,ScrollView, ActivityIndicator} from 'react-native';
import AuthLogo from "./authlogo"
import AuthForm from "./authForm"
export default class AuthComponent extends Component {   
  state={
     loading:false
  } 

  goNext=()=>{
    this.props.navigation.navigate("App")
  }
  render() {   
    const {loading} = this.state
    if (loading) {
       return (
         <View style={styles.loading}>
            <ActivityIndicator size="large"/>
         </View>
       )
    }
    else{
       return (
        <ScrollView style={styles.container}>
         <View>
            <AuthLogo/>
            <AuthForm  goNext={this.goNext}/>
         </View>
         </ScrollView>
       )
    }
   
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1d428a',
     padding:40
  },
  loading:{
     flex:1,
     justifyContent:"center",
     alignSelf:"center"
  }
});