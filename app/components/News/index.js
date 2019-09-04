

import React, {Component} from 'react';
import { View,Text, StyleSheet,ScrollView, Image,TouchableOpacity, ActivityIndicator} from 'react-native';
import {connect} from "react-redux"
import { getAllNews } from '../../store/actions/news.actions';
import Preloader from '../../../utils/Preloder';
import moment  from 'moment';


 class NewsComponent extends Component {     
  componentDidMount(){
   this.props.dispatch(getAllNews())
  }
  
  renderArticles=(news)=>(
    news.stories?
      news.stories.map(story=>{
         return(
          <TouchableOpacity 
          key={story.id} style={styles.cardContainer}
           onPress={
            ()=>  this.props.navigation.navigate("NewArticle",{
               ...story
             })
           }
          > 
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
              <Text style={styles.postDate}> Posted by - {moment(story.date).format("d MMMM YYYY")}</Text>
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
    fontFamily: 'Roboto-Bold',
    color:"#232323",
    fontSize:16,
    padding:10
  },
  bottomCard:{
    flex:1,
    flexDirection:"row",
    borderTopWidth:1,
    borderTopColor:"#E6E6E6",
    padding:10
  }, 
  team:{
   fontFamily: 'Roboto-Medium',
   color:"#828282",
   fontSize:12
  },
  postDate:{
    fontFamily: 'Roboto-Light',
    color:"#828282",
    fontSize:12
  }
});


const mapStateToProps=state=>{
  return{
    News:state.News
  }
}

export default connect(mapStateToProps)(NewsComponent)