

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
          <TouchableOpacity key={story.id} style={styles.cardContainer}> 
            <View>
              <Image
               style={{height:150, justifyContent:"space-around"}} 
               source={{uri:`${story.image}`}} 
                resizeMode="cover"
               />
            </View>
            <View style={styles.contentCard}>
              <Text style={styles.titleCard}> {story.title}</Text>
            </View>
            <View style={styles.bottomCard}>
              <Text style={styles.team}> {story.team}</Text>
            </View>
          </TouchableOpacity>
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
  cardContainer:{
    backgroundColor:"#fff",
    margin:10,
    shadowColor:"#dddddd",
    shadowOffset:{width:0, height:3},
    shadowOpacity:0.8,
    shadowRadius:2,
    elevation:1,
    borderRadius:2
  },
  contentCard:{
    borderWidth:1,
    borderColor:"#dddddd"
  },
  titleCard:{
    color:"#232323",
    fontSize:16,
    padding:10
  },
  bottomCard:{
    color:"#232323",
    fontSize:5,
    padding:5
  },
  team:{
    color:"#231233",
  },
  
});


const mapStateToProps=state=>{
  return{
    News:state.News
  }
}

export default connect(mapStateToProps)(NewsComponent)