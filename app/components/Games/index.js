

import React, {Component} from 'react';
import { View,Text, StyleSheet,ScrollView, Image,TouchableOpacity} from 'react-native';
import {connect} from "react-redux"
import { getAllGames } from '../../store/actions/games.actions';
import Preloader from "../../../utils/Preloder"
import moment from 'moment';

 class GamesComponent extends Component {  
   
  componentDidMount(){
    this.props.dispatch(getAllGames())
  }
  
  listGames=(games)=>(
    games?
    games.map(data=>(
        <TouchableOpacity key={data.id}  onPress={
          ()=>this.props.navigation.navigate("GamesArticle",{
            ...data
          })
        } >
         <View style={styles.gameContainer}>
            <View style={styles.gameBox}>
              <Image 
               style={{height:70,width:70 }}  
               source={{uri:`${data.awayTeam.logo}`}}
               resizeMode="contain"
               />
               <Text style={styles.teamText}> {data.awayTeam.wins} - {data.awayTeam.loss}  </Text>
           </View>
            <View style={styles.gameBox}>
                <Text style={styles.mainText} > {data.time}</Text>
                <Text style={styles.teamText}> {moment(data.date).format("d MMMM YYYY")}</Text>
            </View>
            <View  style={styles.gameBox}>
              <Image 
                style={{height:70,width:70}}  
                source={{uri:`${data.localTeam.logo}`}}
                resizeMode="contain"
                />
                <Text style={styles.teamText} > {data.localTeam.wins} - {data.localTeam.loss}  </Text>
            </View>
        </View>
       </TouchableOpacity>
    ))
    : 
    <Preloader/>
  )


  render() {    
    return (
      <ScrollView style={{backgroundColor:"#f0f0f0"}}>
        <View style={{
          flex:1,
          flexDirection:"column",
          flexWrap:"nowrap"
        }}>
          {this.listGames(this.props.Games.games)}
        </View>
      </ScrollView>   
    )
  }
}


const styles = StyleSheet.create({
  gameContainer:{
  flexDirection: 'row',
  marginBottom: 10,
  backgroundColor: "white",
  shadowColor:"#dddddd",
  shadowOffset:{width:0, height:3},
  shadowOpacity:0.8,
  shadowRadius:2,
  elevation:1,
  },
  gameBox:{
   width:"33.3%",
    backgroundColor: "#fff",
   justifyContent: 'center',
   alignItems: 'center',
   height:100,
  },
  mainText:{
    fontFamily: 'Roboto-Bold',
    fontSize:20,
  },
  teamText:{
    fontFamily: 'Roboto-Light',
    fontSize:12,
  }
});

const mapStateToProps=state=>{
  return {
     Games:state.Games
  }
}


export default connect(mapStateToProps)(GamesComponent)