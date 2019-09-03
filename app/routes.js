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
import Icon from 'react-native-vector-icons/Ionicons';

const myIcon1 = <Icon name="ios-basketball" size={30} color="#fff" />; // Defaults to regular
const myIcon2 = <Icon name="md-tv"  size={30} color="#fff" solid />;

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
    News:{
      screen:NewsStack,
      navigationOptions:{
        tabBarIcon:myIcon1
      }
    },
    Games:{
        screen:GamesStack,
        navigationOptions:{
          tabBarIcon:myIcon2,
          title:"Games"
        }
      },
},{
    tabBarOptions:{
        activeTintColor:"#fff",
        showLabel:false,
        activeBackgroundColor:"#00194b",
        inactiveBackgroundColor:"#001338",
        style:{
            color:"white",
            backgroundColor:"#001338"
        }
    }
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