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
import GamesArticle from "./components/Games/GameArticle"
import News from "./components/News"
import NewArticle from "./components/News/NewArticle"
import Logo from "../utils/Logo"

const headerConf = {
    headerLayoutPreset:"center",
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: "#001338",
        },
        headerTitle:Logo,
        headerTintColor:"white"
    }
}

const GamesStack=createStackNavigator({
   Games:Games,
   GamesArticle:GamesArticle
},{...headerConf})


const NewsStack=createStackNavigator({
    News:News,
    NewArticle:NewArticle
},{ ...headerConf})


const AppStack =  createBottomTabNavigator({
    News:NewsStack,
    Games:GamesStack
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