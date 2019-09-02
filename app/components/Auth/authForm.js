import React, { Component } from 'react'
import {View, Image , Text, TextInput, StyleSheet, Button, Platform} from "react-native"
import Input from '../../../utils/forms/input'
import ValidationRules from "../../../utils/forms/validation.rule"
import {arrangeForm} from "./formUtil"
import {connect} from "react-redux"
import { setTokens} from "../../../utils/config"
import {signIn, signUp} from "../../store/actions/user_action"
import {bindActionCreators } from "redux"
//import console = require('console');
class AuthForm extends Component {
    state={
        type:"Login",
        action:"Login",
        actionMode:" I want to Register ",
        isChanged:false,
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
                   isRequired:true,
                   minLength:7,
                   maxLength:40
                 }
            },
            confirmPassword:{
                value:'',
                valid:false,
                type:'textinput',
                rules:{
                   confirmPassword:'password'
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
         const {form, type} = this.state
         let isFormValid = false
         let newFormObject = {}
         let userInfo={}
         if (type==="Login") {    
            let  newForm = arrangeForm(form)
            if(!newForm.hasOwnProperty("email") || !newForm.hasOwnProperty("password"))this.setState({hasError:true})
            else  {
                this.props.signIn(newForm)
                .then(()=>{
                  this.manageAccess()
                })
            }
         }
         else{
            let  newForm = arrangeForm(form)
                if(!newForm.hasOwnProperty("email") || !newForm.hasOwnProperty("password")) {
                    this.setState({hasError:true},()=>{
                        if(newForm['password']===newForm['confirmPassword']){
                            this.setState({hasError:true},()=>{

                            })
                        }
                    })
                   
                }
                else if(newForm['password']!==newForm['confirmPassword']){
                    this.setState({hasError:true},()=>{
                    })
                }
                else{
                    userInfo={"email":newForm.email,"password":newForm.password}
                     this.props.signUp(userInfo).then(()=>{
                       this.manageAccess()
                     })
                }
         }
    }



   manageAccess = ()=>{
       if(!this.props.Users.auth.uid){
        this.setState({hasError:true})
       } else{
           setTokens(this.props.Users.auth,()=>{
               this.props.goNext()
           })
        }       
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
       let rules = formCopy[inputName].rules;
        let valid= ValidationRules(e,rules, formCopy)
        formCopy[inputName].valid=valid
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
                   <Button 
                    title={this.state.action} 
                    rounded
                    onPress={this.handleSubmit}/>
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

const mapStateToProps=state=>{
    return{
        Users:state.Users
    }
}

const mapDispatchToProps=dispatch=>{
    return bindActionCreators({signIn,signUp}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)

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
