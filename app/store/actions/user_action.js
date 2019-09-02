import { SIGN_IN, SIGN_UP ,AUTO_SIGN_IN} from "../types";
import {SIGN_IN_URL, SIGN_UP_URL,REFRESH_TOKEN_URL} from "../../../utils/config"
import axios from "axios"

//import console = require("console");
export const signUp=(data)=>{
   const request =  axios.post(SIGN_UP_URL,{
       email:data.email,
       password:data.password,
       returnSecureToken:true,
   },{
       headers:{
        'Content-Type': 'application/json'
       },
   })
    .then(response=>{
        return response.data
    }).catch(e=>{
        return e;
    })
    return {
        type:SIGN_UP,
        payload:request
    }
}

export const signIn=(data)=>{
    const request =  axios.post(SIGN_IN_URL,{
        email:data.email,
        password:data.password,
        returnSecureToken:true,
    },{
        headers:{
         'Content-Type': 'application/json'
        },
    })
     .then(response=>{
         return response.data
     }).catch(e=>{
         return e;
     })
     return {
         type:SIGN_IN,
         payload:request
     }
}

export const autoSignIn=(refreshToken)=>{
    const request=  axios.post(REFRESH_TOKEN_URL, {
        refresh_token:refreshToken,
        grant_type:"refresh_token"
    },{
        headers:{
            'Content-Type': 'application/json'
       },
     })
     .then(response=>{
        return response.data
    }).catch(e=>{
        return e
    })
    return {
        type:AUTO_SIGN_IN,
        payload:request
    }

}