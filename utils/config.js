import AsyncStorage from "@react-native-community/async-storage"
//import console = require("console");

export const EmailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const API_KEY="AIzaSyAfH7cxQfpNnmL8afesKrdre1xf6HeoQ2E"
export const DB_URL="https://mbapratice.firebaseio.com"
export const SIGN_IN_URL= `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
export const SIGN_UP_URL=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
export const REFRESH_TOKEN_URL=`https://securetoken.googleapis.com/v1/token?key=${API_KEY}`

export const  setTokens=(value,cb)=>{
    console.log("storing ...")
     const date = new Date()
     const exp =  date.getTime()+(3600*100)
    AsyncStorage.multiSet([
      ['@talk_talk_@token', value.token],
      ['@talk_talk@refreshToken', value.refToken],
      ['@talk_talk@userId',value.uid],
      ['@talk_talk@expireToken',exp.toString()]
    ])
    .then(response=>{
        cb()
    })
} 

export const  getTokens=(cb)=>{
    AsyncStorage.multiGet([
        '@talk_talk_@token','@talk_talk@refreshToken','@talk_talk@userId','@talk_talk@expireToken'
    ])
    .then(value=>{
        cb(value)
    })
} 

