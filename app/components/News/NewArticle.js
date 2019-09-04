import React, {Component} from 'react';
import { View,Text, StyleSheet,Image,ScrollView} from 'react-native';
import moment from "moment"

export default class NewArticle extends Component { 

  convertText= (text)=>{
    return text.replace(/<p>/g, "").replace(/<\/p>/g,"")
    
  }

  render() {    
    const params = this.props.navigation.state.params
    return (
    <ScrollView style={styles.cardContainer}>
       <Image
          style={{height:250}}
          source={{uri: params.image}}
          resizeMode="cover"
       />
       <View >
         <Text style={styles.title}>{params.title} </Text>
         <Text style={styles.description}> by {params.team } - {moment(params.date).format("d MMMM YYYY")} </Text>
       </View>
       <View style={styles.articleContainer}>
         <Text style={styles.contentText}>
            { this.convertText(params.content)}
         </Text>
       </View>
    </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  articleContainer:{
    padding:7,
    marginTop:30
  },
  title:{
    fontFamily: 'Roboto-Bold',
    color:"#232323",
    fontSize:20,
    marginTop:20,
    padding:1,
  },
  description:{
    fontFamily: 'Roboto-Light',
    color:"#696969",
    fontSize:10,
  },
  cardContainer:{
   padding:10
  },
  contentText:{
   fontFamily:"Roboto-Light",
   lineHeight:20,
   fontSize:14
  }
});