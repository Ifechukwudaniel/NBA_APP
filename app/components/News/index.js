

import React, {Component} from 'react';
import { View,Text, StyleSheet,ScrollView, Image,TouchableOpacity, ActivityIndicator} from 'react-native';
import {connect} from "react-redux"
import { getAllNews } from '../../store/actions/news.actions';
import Preloader from '../../../utils/Preloder';

 class NewsComponent extends Component {     
  componentDidMount(){
   this.props.dispatch(getAllNews())
  }
  
  renderArticles=(news)=>(
    news.stories?
      news.stories.map(story=>{
         return(
           <Text key={story.id}>hdwhdwudhwd</Text>
         )
      })
    : <Preloader/>
  )
  render() {    
    return (
        <ScrollView style={{backgroundColor:"#f0f0f0"}}>
            {this.renderArticles(this.props.News)}
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
  return{
    News:state.News
  }
}

export default connect(mapStateToProps)(NewsComponent)