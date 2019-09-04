

import React, {Component} from 'react';
import { View,Text, StyleSheet,ScrollView} from 'react-native';
import {connect} from "react-redux"
import { getAllGames } from '../../store/actions/games.actions';
import Preloader from "../../../utils/Preloder"

 class GamesComponent extends Component {  
   
  componentDidMount(){
    this.props.dispatch(getAllGames())
  }
  
  listGames=(games)=>(
    games?
    games.map(data=>(
        <Text key={data.id}> am working</Text>
    ))
    : 
    <Preloader/>
  )


  render() {    
    return (
      <ScrollView style={styles.container}>
        {this.listGames(this.props.Games.games)}
      </ScrollView>   
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  }
});

const mapStateToProps=state=>{
  return {
     Games:state.Games
  }
}


export default connect(mapStateToProps)(GamesComponent)