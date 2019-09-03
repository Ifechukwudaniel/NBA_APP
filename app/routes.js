import React from 'react';
import {
    createAppContainer, 
    createStackNavigator, 
    createBottomTabNavigator,
    createSwitchNavigator,
    createMaterialTopTabNavigator,
} from "react-navigation"
import { Platform } from 'react-native';

//screen

import SignIn from "./components/Auth"
import Games from "./components/Games"
import News from "./components/News"


const AppStack =  createBottomTabNavigator({
    Games:Games,
    News:News,
})

const AuthStack = createStackNavigator({
   SignIn:SignIn
}, {
    headerMode:"none",
})


export const  RootNavigator= ()=>{
     return createAppContainer(createSwitchNavigator({
         App:AppStack,
         Auth:AuthStack
     },{
         initialRouteName:'Auth'
     }))
}