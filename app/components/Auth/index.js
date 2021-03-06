

import React, {Component} from 'react';
import { View,Text, StyleSheet,  Button,ScrollView, ActivityIndicator} from 'react-native';
import AuthLogo from "./authlogo"
import AuthForm from "./authForm"
import {connect} from "react-redux"
import {getTokens,setTokens} from '../../../utils/config'
import {autoSignIn} from "../../store/actions/user_action"
import {bindActionCreators} from "redux"
import Preloader from '../../../utils/Preloder';
// import console = require('console');

class AuthComponent extends Component {   
  state={
     loading:false
  } 
  componentDidMount(){
     this.setState({loading:true})
     getTokens((value)=>{
        if(value[1][1]==null){this.setState({loading:false}) 
        return
        }
        this.props.autoSignIn(value[1][1]).then(()=>{
         if(!this.props.Users.auth.uid){
            this.setState({loading:false})  
            return  
         }
         this.goNext() 
      })
     })
  }
  
  goNext=()=>{
    this.props.navigation.navigate("App")
  }

  loading=()=>{
     this.setState({loading:true})
  }

  loadingFalse=()=>{
   this.setState({loading:false})
}
  render() {   
    const {loading} = this.state
    if (loading) {
       return (
       <Preloader/>
       )
    }
    else{
       return (
        <ScrollView style={styles.container}>
         <View>
            <AuthLogo/>
            <AuthForm loading={this.loading} loadingFalse={this.loadingFalse}  goNext={this.goNext}/>
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


const mapStateToProps=(state)=>{
   return {
      Users:state.Users
   }
}

const mapDispatchToProps=(dispatch)=>{
   return bindActionCreators({autoSignIn},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent)