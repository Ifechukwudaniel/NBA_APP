

import React, {Component} from 'react';
import { View,Text, StyleSheet,} from 'react-native';
import {connect} from "react-redux"
import { getAllGames } from '../../store/actions/games.actions';

 class GamesComponent extends Component {  
   
  componentDidMount(){
    this.props.dispatch(getAllGames())
  }
  
  render() {    
    return (
      <View>
        <Text> The Games Component</Text>
      </View>   
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