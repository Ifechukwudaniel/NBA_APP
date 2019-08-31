import React, { Component } from 'react'
import {View, Image , Text, TextInput, StyleSheet, Button, Platform} from "react-native"
import Input from '../../../utils/forms/input'
//import console = require('console');

export default class AuthForm extends Component {
    state={
        type:"Login",
        action:"Login",
        actionMode:" I want to Register ",
        hasError:false,
        form:{
            email:{
                value:'',
                valid:false,
                type:'textinput',
                rules:{
                    isRequired:true,
                    isEmail:true
                }
            },
            password:{
                value:'',
                valid:false,
                type:'textinput',
                rules:{
                   isRequired:true
                 }
            },
            confirmPassword:{
                value:'',
                valid:false,
                type:'textinput',
                rules:{
                   confirmPass:'password'
                 }
            }
        }
    }

    formHasErrors=()=>(
        this.state.hasError ?
        <View style ={styles.errorContainer}> 
           <Text style={styles.errorLabel}> Please check your info</Text>
        </View>
        :
        null
    )
    
    handleSubmit = ()=>{
      alert("bbbbbdbb")
    }

    changeFormType=()=>{
        const form= this.state
        this.setState({
           type: form.type==="Login"  ? "Register":"Login",
           action : form.type==="Login"  ? "Register":"Login" ,
           actionMode:form.type==="Login"? "i want to login":"i want to register"
        })
    }

    confirmPassword=(type)=>{
            return(
              type==="Register"? <Input
                placeholder="Confirm Password"
                placeholderTextColor="white"
                type={this.state.form.confirmPassword.type}
                value={this.state.form.confirmPassword.value}
                secureTextEntry ={true}
                onChangeText= {(value) => this.updateInput(value, "confirmPassword")}
                overrideStyle={{
                   marginBottom:20
               }}
                /> :
                null
            )
        }

    updateInput= (e, inputName)=>{
       this.setState({hasError:false})
       let formCopy = this.state.form
       formCopy[inputName].value = e
       this.setState({form:formCopy})
    }
    


    render() {
        return (
           <View>
              <Input
               placeholder="Enter Email"
               placeholderTextColor="white"
               autoCapitalize="none"
               type={this.state.form.email.type}
               value={this.state.form.email.value}
               onChangeText= {(value) => this.updateInput(value, "email")}
               overrideStyle={{
                borderBottomColor:"#eaeaea",
                
               }}
                />

          <Input
               placeholder="Enter Password"
               placeholderTextColor="white"
               type={this.state.form.password.type}
               value={this.state.form.password.value}
               secureTextEntry ={true}
               onChangeText= {(value) => this.updateInput(value, "password")}
                />
                {this.confirmPassword(this.state.type)}
                {this.formHasErrors()}
            <View >
               <View style={styles.button}>
                   <Button  title={this.state.action} onPress={this.handleSubmit}/>
                </View>
                <View style={styles.button} >
                   <Button title={this.state.actionMode}
                   onPress={this.changeFormType}/>
               </View>
               <View style={styles.button} >
                   <Button title="I will Do It letter" 
                   onPress={this.props.goNext}/>
               </View>
            </View>
           </View>
        )
    }
}

const styles= StyleSheet.create({
    errorContainer:{
        alignContent:"center",
        marginTop:10,
        width:"100%",
        backgroundColor:"#f44336",
        borderRadius:2,
        padding:8
    },
    errorLabel:{
       color:"#fff",
       fontWeight:"bold",
       alignSelf:"center"
    },
    button:{
    ...Platform.select({
        android:{
            marginBottom:10,
            marginTop:10,
            borderRadius:100,
            elevation:20
        },
        ios:{
        }
    })
    }
})
