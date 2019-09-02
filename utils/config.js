import AsyncStorage from "@react-native-community/async-storage"
//import console = require("console");

export const EmailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const API_KEY="AIzaSyAfH7cxQfpNnmL8afesKrdre1xf6HeoQ2E"
export const DB_URL="https://mbapratice.firebaseio.com"
export const SIGN_IN_URL= `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
export const SIGN_UP_URL=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`

export const  setTokens=(value,cb)=>{
     
    AsyncStorage.multiSet([
      ['@talk_talk_@token', value.token],
      ['@talk_talk@refreshToken', value.refToken],
      ['@talk_talk@userId',value.uid],
      ['@talk_talk@expireIn', Date.now()+(3600*100)]
    ])
    .then(response=>{
        cb()
    })
} 

export const  getTokens=(value,cb)=>{
    AsyncStorage.multiSet([
        '@talk_talk_@token','@talk_talk@refreshToken','@talk_talk@userId','@talk_talk@expireIn'
    ])
    .then(response=>{
        cb(response)
    })
} 

